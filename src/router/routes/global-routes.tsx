import { routePath } from '../path';
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

export const publicRoutes = [
  {
    path: routePath.LOGIN,
    Component: LoginPage,
  },
  {
    path: routePath.LOST_ITEMS,
    Component: LostItemsPage,
  },
  {
    path: routePath.HOME,
    Component: HomePage,
  },
  {
    path: routePath.BOOTH,
    Component: BoothPage,
  },
  {
    path: routePath.BLIND_MATCH,
    Component: BlindMatchPage,
  },
  {
    path: routePath.LAND,
    Component: LandPage,
  },
  {
    path: routePath.TICKET,
    Component: TicketPage,
  },
  {
    path: routePath.LOGIN_FALLBACK,
    Component: LoginFallbackPage,
  },
];
