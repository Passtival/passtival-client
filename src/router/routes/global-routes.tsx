// global-routes.tsx

import { routeePath } from '../path';
import {
  BlindMatchPage,
  BoothPage,
  HomePage,
  LandPage,
  LostItemsPage,
  LoginPage,
  TicketPage,
  FallbackPage,
} from '../lazy';

export const publicRoutes = [
  {
    path: routeePath.LOGIN,
    Component: LoginPage,
  },
  {
    path: routeePath.LOST_ITEMS,
    Component: LostItemsPage,
  },
  {
    path: routeePath.HOME,
    Component: HomePage,
  },
  {
    path: routeePath.BOOTH,
    Component: BoothPage,
  },
  {
    path: routeePath.BLIND_MATCH,
    Component: BlindMatchPage,
  },
  {
    path: routeePath.LAND,
    Component: LandPage,
  },
  {
    path: routeePath.TICKET,
    Component: TicketPage,
  },
  {
    path: routeePath.FALLBACK,
    Component: FallbackPage,
  },
];
