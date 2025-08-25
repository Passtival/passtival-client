import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from '@router/routes/protected-route';

import GlobalLayout from './global-layout';
import MainLayout from './main-layout';
import {
  publicRoutesWithMain,
  publicRoutesOthers,
  protectedRoutes,
} from './routes/global-routes';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [
      {
        Component: MainLayout,
        children: publicRoutesWithMain,
      },
      ...publicRoutesOthers,
      {
        Component: ProtectedRoute,
        children: protectedRoutes,
      },
    ],
  },
]);
