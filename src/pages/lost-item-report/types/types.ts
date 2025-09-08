import type { paths } from '@shared/apis/types/schema';

// 분실물 등록 요청 타입
export type FoundItemRequest =
  paths['/api/admin/found-item']['post']['requestBody']['content']['application/json'];

// 분실물 등록 응답 타입
export type FoundItemResponse =
  paths['/api/admin/found-item']['post']['responses']['200']['content']['*/*'];

// 분실물 삭제 응답 타입
export type FoundItemDeleteResponse =
  paths['/api/admin/found-item/{id}']['delete']['responses']['200']['content']['*/*'];

// 분실물 상세 조회 응답 타입
export type FoundItemDetailResponse =
  paths['/api/found-items/{id}']['get']['responses']['200']['content']['*/*'];

// S3 업로드 URL 응답 타입
export type S3UploadUrlResponse =
  paths['/api/s3/upload-url']['get']['responses']['200']['content']['*/*'];
