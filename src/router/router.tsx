import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from '@router/routes/protected-route';

import ErrorPage from '@pages/error/error';

import GlobalLayout from './global-layout';
import MainLayout from './main-layout';
import {
  publicRoutesWithMain,
  publicRoutesOthers,
  protectedRoutes,
  ticketOnBoardingRoutes,
} from './routes/global-routes';
import TicketOnBoardingLayout from './ticketonboarding-layout';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        Component: MainLayout,
        children: [
          ...publicRoutesWithMain,
          {
            Component: ProtectedRoute,
            children: protectedRoutes,
          },
        ],
      },
      ...publicRoutesOthers,
    ],
  },
  {
    Component: TicketOnBoardingLayout,
    children: ticketOnBoardingRoutes,
  },
]);
