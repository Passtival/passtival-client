/**
 * S3에 이미지 파일을 업로드하는 유틸리티 함수
 *
 * @param preSignedUrl - S3 PreSigned URL (AWS S3 도메인)
 * @param imageFile - 업로드할 이미지 파일
 *
 * @note fetch를 사용하는 이유:
 * - S3는 AWS 서버(다른 도메인)이므로 우리 axios 인스턴스 사용 불가
 * - PreSigned URL에 서명이 포함되어 별도 인증 헤더 불필요
 * - File 객체를 바이너리로 직접 전송해야 함
 */
export const uploadImageToS3 = async (
  preSignedUrl: string,
  imageFile: File,
): Promise<void> => {
  const uploadResponse = await fetch(preSignedUrl, {
    method: 'PUT',
    body: imageFile,
    headers: {
      'Content-Type': imageFile.type,
    },
  });

  if (!uploadResponse.ok) {
    throw new Error('이미지 업로드에 실패했습니다.');
  }
};

/**
 * PreSigned URL에서 실제 파일 URL을 추출하는 함수
 *
 * @param preSignedUrl - S3 PreSigned URL (쿼리 파라미터 포함)
 * @returns 실제 파일 접근 URL (쿼리 파라미터 제거)
 *
 * @example
 * getFileUrlFromPreSignedUrl('https://bucket.s3.amazonaws.com/path?signature=xxx')
 * // returns: 'https://bucket.s3.amazonaws.com/path'
 */
export const getFileUrlFromPreSignedUrl = (preSignedUrl: string): string => {
  return preSignedUrl.split('?')[0];
};
