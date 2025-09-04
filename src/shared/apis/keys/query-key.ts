export const PERFORMANCES_QUERY_KEY = {
  ALL: ['performance'],
  PERFORMANCE_DETAIL: (performanceId: string) => [
    ...PERFORMANCES_QUERY_KEY.ALL,
    'detail',
    performanceId,
  ],
} as const;

export const LOST_ITEM_QUERY_KEY = {
  ALL: ['lost'],
  LOST_ITEM_PREVIEW: () => [...LOST_ITEM_QUERY_KEY.ALL, 'items'],
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
};
