export const END_POINT = {
  PERFORMANCES_INFO: '/api/festival/performances/{performanceId}',
  LOST_ITEMS: '/api/found-items',
  ADMIN_LOGIN: '/api/admin/login',
  ADMIN_FOUND_ITEM: '/api/admin/found-item',
  ADMIN_FOUND_ITEM_DELETE: '/api/admin/found-item/{id}',
  S3_UPLOAD_URL: '/api/s3/upload-url',
  FOUND_ITEM_DETAIL: '/api/found-items/{id}',
  ADMIN_RAFFLE_AUTH_KEY: '/api/admin/raffle/authentication-key',
  AUTH_REFRESH: '/api/auth/refresh',
  MEMBER_LEVEL_UP: '/api/member/level-up',
  ADMIN_RAFFLE_DAY: '/api/admin/raffle/{day}',
  ADMIN_RAFFLE_WINNERS: '/api/admin/raffle/{day}',
} as const;
