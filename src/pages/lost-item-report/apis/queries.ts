import { mutationOptions } from '@tanstack/react-query';

import type {
  FoundItemRequest,
  FoundItemResponse,
  FoundItemDeleteResponse,
  S3UploadUrlResponse,
  FoundItemDetailResponse,
} from '@pages/lost-item-report/types/types';
import {
  getFileUrlFromPreSignedUrl,
  uploadImageToS3,
} from '@pages/lost-item-report/utils/s3-upload';

import { END_POINT } from '@shared/apis/config/end-point';
import { api, adminApi } from '@shared/apis/config/instance';
import { LOST_ITEM_QUERY_KEY } from '@shared/apis/keys/query-key';

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

/**
 * 분실물을 삭제합니다.
 * @param id - 삭제할 분실물 ID
 * @returns 분실물 삭제 응답 데이터
 */
export const deleteFoundItem = async (
  id: number,
): Promise<FoundItemDeleteResponse> => {
  const { data } = await adminApi.delete<FoundItemDeleteResponse>(
    END_POINT.ADMIN_FOUND_ITEM_DELETE.replace('{id}', id.toString()),
  );
  return data;
};

/**
 * 분실물 상세를 조회합니다.
 * @param id - 조회할 분실물 ID
 * @returns 분실물 상세 응답 데이터
 */
export const getFoundItemDetail = async (
  id: number,
): Promise<FoundItemDetailResponse> => {
  const response = await api.get<FoundItemDetailResponse>(
    `${END_POINT.FOUND_ITEM_DETAIL.replace('{id}', id.toString())}`,
  );
  return response.data;
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

  DELETE_FOUND_ITEM: () => {
    return mutationOptions({
      mutationKey: LOST_ITEM_QUERY_KEY.ADMIN_FOUND_ITEM_DELETE(),
      mutationFn: deleteFoundItem,
    });
  },
};

export const FOUND_ITEM_QUERY_OPTIONS = {
  FOUND_ITEM_DETAIL: (id: number) => ({
    queryKey: LOST_ITEM_QUERY_KEY.FOUND_ITEM_DETAIL(id),
    queryFn: () => getFoundItemDetail(id),
  }),
} as const;
