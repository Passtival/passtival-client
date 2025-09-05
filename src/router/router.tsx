import { createBrowserRouter } from 'react-router-dom';

import OnBoardingLayout from '@router/onboarding-layout';
import { ProtectedRoute } from '@router/routes/protected-route';

import ErrorPage from '@pages/error/error';

import GlobalLayout from './global-layout';
import MainLayout from './main-layout';
import {
  publicRoutesWithMain,
  publicRoutesOthers,
  protectedRoutes,
  onBoardingRoutes,
  protectedAdminRoutes,
} from './routes/global-routes';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        Component: MainLayout,
        children: [
          ...publicRoutesWithMain,
          ...protectedAdminRoutes,
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
    Component: OnBoardingLayout,
    children: onBoardingRoutes,
  },
]);
