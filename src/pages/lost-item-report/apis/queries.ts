import { mutationOptions } from '@tanstack/react-query';

import type {
  FoundItemRequest,
  FoundItemResponse,
  S3UploadUrlResponse,
} from '@pages/lost-item-report/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { adminApi } from '@shared/apis/config/instance';
import { LOST_ITEM_QUERY_KEY } from '@shared/apis/keys/query-key';

import {
  uploadImageToS3,
  getFileUrlFromPreSignedUrl,
} from '../utils/s3-upload';

// =============================================================================
// QUERY FUNCTIONS
// =============================================================================

/**
 * S3 업로드 URL을 조회합니다.
 * @param fileName - 업로드할 파일명
 * @returns S3 업로드 URL 응답 데이터
 */
export const getS3UploadUrl = async (
  fileName: string,
): Promise<S3UploadUrlResponse> => {
  const { data } = await adminApi.get<S3UploadUrlResponse>(
    END_POINT.S3_UPLOAD_URL,
    {
      params: { fileName },
    },
  );

  return data;
};

/**
 * 분실물을 등록합니다 (이미지 업로드 포함).
 * @param data - 분실물 등록 데이터
 * @returns 분실물 등록 응답 데이터
 */
export const createFoundItem = async (data: {
  title: string;
  area: string;
  foundDateTime: string;
  imageFile?: File;
}): Promise<FoundItemResponse> => {
  let imageUrl: string | undefined = undefined;

  // 이미지가 있는 경우 S3 업로드
  if (data.imageFile) {
    const fileName = `found-item-${Date.now()}-${data.imageFile.name}`;
    const uploadUrlResponse = await getS3UploadUrl(fileName);

    if (!uploadUrlResponse.isSuccess || !uploadUrlResponse.result) {
      throw new Error('S3 업로드 URL을 가져오는데 실패했습니다.');
    }

    // S3에 이미지 업로드
    await uploadImageToS3(uploadUrlResponse.result, data.imageFile);

    // 실제 파일 URL 추출
    imageUrl = getFileUrlFromPreSignedUrl(uploadUrlResponse.result);
  }

  // 분실물 등록
  const foundItemData: FoundItemRequest = {
    title: data.title,
    area: data.area,
    foundDateTime: data.foundDateTime,
    imagePath: imageUrl,
  };

  const { data: response } = await adminApi.post<FoundItemResponse>(
    END_POINT.ADMIN_FOUND_ITEM,
    foundItemData,
  );
  return response;
};

// =============================================================================
// MUTATION OPTIONS
// =============================================================================

export const LOST_ITEM_MUTATION_OPTIONS = {
  CREATE_FOUND_ITEM: () => {
    return mutationOptions({
      mutationKey: LOST_ITEM_QUERY_KEY.ADMIN_FOUND_ITEM(),
      mutationFn: createFoundItem,
    });
  },
};
