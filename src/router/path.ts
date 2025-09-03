export const routePath = {
  BLIND_MATCH: '/blind-match',
  BOOTH: '/booth',
  BOOTH_DETAIL: '/booth-detail/:id',
  LOGIN_CALLBACK: '/login-callback',
  HOME: '/',
  SHOW_DETAIL: '/show-detail/:id',
  LAND: '/land',
  LOGIN: '/login',
  LOST_ITEMS: '/lost-items',
  LOST_ITEM_INFO: '/lost-items/:id',
  TICKET: '/ticket',
  ADMIN_LOGIN: '/admin-login',
  INFO_SHARE_CONSENT: '/info-share-consent',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
