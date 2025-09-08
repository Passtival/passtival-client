import {
  BlindMatchPage,
  BoothPage,
  HomePage,
  ShowDetailPage,
  LandPage,
  LostItemsPage,
  LoginPage,
  TicketPage,
  LoginCallbackPage,
  AdminLoginPage,
  LostItemIngoPage,
  BoothDetailPage,
  LostItemReportPage,
  InfoShareConsentPage,
  LandingPage,
  TicketOnboardingPage,
  onBoardingPage,
  AdminMainPage,
  GenerateAuthKeyPage,
  TicketDrawingPage,
} from '../lazy';
import { routePath } from '../path';

export const publicRoutesWithMain = [
  { path: routePath.HOME, Component: HomePage },
  { path: routePath.BOOTH, Component: BoothPage },
  { path: routePath.LOST_ITEMS, Component: LostItemsPage },
  { path: routePath.LOGIN, Component: LoginPage },
];

export const publicRoutesOthers = [
  { path: routePath.LOGIN_CALLBACK, Component: LoginCallbackPage },
  { path: routePath.LAND, Component: LandPage },
  { path: routePath.ADMIN_LOGIN, Component: AdminLoginPage },
  { path: routePath.SHOW_DETAIL, Component: ShowDetailPage },
  { path: routePath.LOST_ITEM_INFO, Component: LostItemIngoPage },
  { path: routePath.BOOTH_DETAIL, Component: BoothDetailPage },
  { path: routePath.LOST_ITEM_REPORT, Component: LostItemReportPage },
  { path: routePath.INFO_SHARE_CONSENT, Component: InfoShareConsentPage },
  { path: routePath.LINDING, Component: LandingPage },
  { path: routePath.TICKET_ONBOARDING, Component: TicketOnboardingPage },
];

export const protectedRoutes = [
  { path: routePath.BLIND_MATCH, Component: BlindMatchPage },
  { path: routePath.TICKET, Component: TicketPage },
];

export const protectedAdminRoutes = [
  { path: routePath.ADMIN_MAIN, Component: AdminMainPage },
  { path: routePath.GENERATE_AUTH_KEY, Component: GenerateAuthKeyPage },
  { path: routePath.TICKET_DRAWING, Component: TicketDrawingPage },
];

export const onBoardingRoutes = [
  { path: routePath.ONBOARDING, Component: onBoardingPage },
];
