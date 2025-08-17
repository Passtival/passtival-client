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
    ],
  },
  //BottomNav를 사용하지 않는 페이지는 이곳에 넣어주세요.
];
