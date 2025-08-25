import {
  BlindMatchPage,
  BoothPage,
  HomePage,
  LandPage,
  LostItemsPage,
  LoginPage,
  TicketPage,
  LoginFallbackPage,
} from '../lazy';
import { routePath } from '../path';

export const publicRoutesWithMain = [
  { path: routePath.HOME, Component: HomePage },
  { path: routePath.BOOTH, Component: BoothPage },
  { path: routePath.TICKET, Component: TicketPage },
  { path: routePath.LOST_ITEMS, Component: LostItemsPage },
];

export const publicRoutesOthers = [
  { path: routePath.LOGIN, Component: LoginPage },
  { path: routePath.LOGIN_FALLBACK, Component: LoginFallbackPage },
  { path: routePath.LAND, Component: LandPage },
];

export const protectedRoutes = [
  { path: routePath.BLIND_MATCH, Component: BlindMatchPage },
];
