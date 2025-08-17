import GlobalLayout from '../global-layout';
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

export const publicRoutes = [
  // GlobalLayout (하단 네비게이션 바 포함)이 필요한 라우트들입니다.
  {
    element: <GlobalLayout />,
    children: [
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
    ],
  },
  // GlobalLayout (하단 네비게이션 바)이 필요 없는 라우트들입니다.
  {
    path: routePath.BOOTH,
    Component: BoothPage,
  },
];
