export const routePath = {
  BLIND_MATCH: '/blind-match',
  BOOTH: '/booth',
  LOGIN_FALLBACK: '/login-fallback',
  HOME: '/',
  HOME_DETAIL: '/detail/:id',
  LAND: '/land',
  LOGIN: '/login',
  LOST_ITEMS: '/lost-items',
  TICKET: '/ticket',
  ADMIN_LOGIN: '/admin-login',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
