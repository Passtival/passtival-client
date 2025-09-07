export const PERFORMANCES_QUERY_KEY = {
  ALL: ['performance'],
  PERFORMANCE_DETAIL: (performanceId: string) => [
    ...PERFORMANCES_QUERY_KEY.ALL,
    'detail',
    performanceId,
  ],
} as const;

export const LOST_ITEM_QUERY_KEY = {
  ALL: ['lost'] as const,
  LOST_ITEM_PREVIEW: () => [...LOST_ITEM_QUERY_KEY.ALL, 'items'] as const,
  ADMIN_FOUND_ITEM: () =>
    [...LOST_ITEM_QUERY_KEY.ALL, 'admin', 'found-item'] as const,
  ADMIN_FOUND_ITEM_DELETE: () =>
    [...LOST_ITEM_QUERY_KEY.ALL, 'admin', 'found-item', 'delete'] as const,
  FOUND_ITEM_DETAIL: (id: number) =>
    [...LOST_ITEM_QUERY_KEY.ALL, 'detail', id] as const,
} as const;

export const RAFFLE_QUERY_KEY = {
  ALL: ['raffle'],
} as const;

export const BOOTH_QUERY_KEY = {
  ALL: ['booth'],
} as const;

export const MATCHING_QUERY_KEY = {
  ALL: ['matching'],
};

export const ADMIN_QUERY_KEY = {
  ALL: ['admin'],
  ADMIN_LOGIN: () => [...ADMIN_QUERY_KEY.ALL, 'login'],
  ADMIN_FOUND_ITEM: () => [...ADMIN_QUERY_KEY.ALL, 'found-item'],
} as const;

export const S3_QUERY_KEY = {
  ALL: ['s3'],
  UPLOAD_URL: (fileName: string) => [
    ...S3_QUERY_KEY.ALL,
    'upload-url',
    fileName,
  ],
} as const;
