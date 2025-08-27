export const routePath = {
  BLIND_MATCH: '/blind-match',
  BOOTH: '/booth',
  LOGIN_FALLBACK: '/login-fallback',
  HOME: '/',
  SHOW_DETAIL: '/show-detail/:id',
  LAND: '/land',
  LOGIN: '/login',
  LOST_ITEMS: '/lost-items',
  LOST_ITEM_INFO: '/lost-items/:id',
  TICKET: '/ticket',
  ADMIN_LOGIN: '/admin-login',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
