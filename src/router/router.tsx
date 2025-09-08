import { createBrowserRouter } from 'react-router-dom';

import OnBoardingLayout from '@router/onboarding-layout';
import { AdminProtectedRoute } from '@router/routes/admin-protected-route';
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
import { TicketOnboardingPage } from '../router/lazy';

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
          {
            Component: AdminProtectedRoute,
            children: protectedAdminRoutes,
          },
        ],
      },
      ...publicRoutesOthers,
      {
        path: '/ticket-onboarding',
        Component: TicketOnboardingPage,
      },
    ],
  },
  {
    Component: OnBoardingLayout,
    ErrorBoundary: ErrorPage,
    children: onBoardingRoutes,
  },
]);
