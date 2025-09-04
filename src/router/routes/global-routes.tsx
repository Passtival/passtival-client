import {
  BlindMatchPage,
  BoothPage,
  HomePage,
  ShowDetailPage,
  LandPage,
  LostItemsPage,
  LoginPage,
  TicketPage,
  LoginFallbackPage,
  AdminLoginPage,
  LostItemIngoPage,
  BoothDetailPage,
  LostItemReportPage,
  InfoShareConsentPage,
} from '../lazy';
import { routePath } from '../path';

export const publicRoutesWithMain = [
  { path: routePath.HOME, Component: HomePage },
  { path: routePath.BOOTH, Component: BoothPage },
  { path: routePath.TICKET, Component: TicketPage },
  { path: routePath.LOST_ITEMS, Component: LostItemsPage },
  { path: routePath.LOGIN, Component: LoginPage },
];

export const publicRoutesOthers = [
  { path: routePath.LOGIN_FALLBACK, Component: LoginFallbackPage },
  { path: routePath.LAND, Component: LandPage },
  { path: routePath.ADMIN_LOGIN, Component: AdminLoginPage },
  { path: routePath.SHOW_DETAIL, Component: ShowDetailPage },
  { path: routePath.LOST_ITEM_INFO, Component: LostItemIngoPage },
  { path: routePath.BOOTH_DETAIL, Component: BoothDetailPage },
  { path: routePath.LOST_ITEM_REPORT, Component: LostItemReportPage },
  { path: routePath.INFO_SHARE_CONSENT, Component: InfoShareConsentPage },
];

export const protectedRoutes = [
  { path: routePath.BLIND_MATCH, Component: BlindMatchPage },
];
