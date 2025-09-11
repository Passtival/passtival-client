export const PERFORMANCES_QUERY_KEY = {
  ALL: ['performance'],
  PERFORMANCE_PREVIEW: () => [...PERFORMANCES_QUERY_KEY.ALL, 'list'],
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

export const BLIND_MATCH_QUERY_KEY = {
  ALL: ['blind'],
  BLIND_MATCH_PREVIEW: () => [...BLIND_MATCH_QUERY_KEY.ALL, 'match'],
} as const;

export const RAFFLE_QUERY_KEY = {
  ALL: ['raffle'],
  PRIZES: (days: number) => [...RAFFLE_QUERY_KEY.ALL, 'prizes', days],
} as const;

export const BOOTH_QUERY_KEY = {
  ALL: ['booth'],
  BOOTH_INFO: (boothId: string) => [...BOOTH_QUERY_KEY.ALL, 'info', boothId],
  BOOTH_MENUS: (boothId: string) => [...BOOTH_QUERY_KEY.ALL, 'menus', boothId],
  BOOTH_ACTIVITIES: (boothId: string) => [
    ...BOOTH_QUERY_KEY.ALL,
    'activities',
    boothId,
  ],
  BOOTHS_CURSOR: (cursor?: number, size?: number) => [
    ...BOOTH_QUERY_KEY.ALL,
    'cursor',
    cursor,
    size,
  ],
} as const;

export const MATCHING_QUERY_KEY = {
  ALL: ['matching'],
};

export const ADMIN_QUERY_KEY = {
  ALL: ['admin'] as const,
  LOGIN: () => [...ADMIN_QUERY_KEY.ALL, 'login'] as const,
  FOUND_ITEM: () => [...ADMIN_QUERY_KEY.ALL, 'found-item'] as const,
  RAFFLE_AUTH_KEY: () =>
    [...ADMIN_QUERY_KEY.ALL, 'raffle', 'auth-key'] as const,
  RAFFLE_DAY: (day: number) =>
    [...ADMIN_QUERY_KEY.ALL, 'raffle', 'day', day] as const,
  RAFFLE_WINNERS: (day: number) =>
    [...ADMIN_QUERY_KEY.ALL, 'raffle', 'winners', day] as const,
} as const;

export const S3_QUERY_KEY = {
  ALL: ['s3'],
  UPLOAD_URL: (fileName: string) => [
    ...S3_QUERY_KEY.ALL,
    'upload-url',
    fileName,
  ],
} as const;
