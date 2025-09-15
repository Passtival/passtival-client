export const routePath = {
  BLIND_MATCH: '/blind-match',
  BOOTH: '/booth',
  BOOTH_DETAIL: '/booth-detail/:id',
  LOGIN_CALLBACK: '/login-callback',
  HOME: '/',
  SHOW_DETAIL: '/show-detail/:performanceId',
  LAND: '/land',
  LOGIN: '/login',
  LOST_ITEMS: '/lost-items',
  LOST_ITEM_INFO: '/lost-items/:id',
  LOST_ITEM_REPORT: '/lost-item-report',
  TICKET: '/ticket',
  TICKET_DRAWING: '/ticket-drawing',
  ADMIN_LOGIN: '/admin-login',
  ADMIN_MAIN: '/admin-main',
  GENERATE_AUTH_KEY: '/generate-auth-key',
  INFO_SHARE_CONSENT: '/info-share-consent',
  LINDING: '/landing',
  TICKET_ONBOARDING: '/ticket-onboarding',
  ONBOARDING: '/onboarding',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
