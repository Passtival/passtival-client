import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './global-layout';
import { routePath } from './path';
import { publicRoutes } from './routes/global-routes';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <GlobalLayout />,
    children: [...publicRoutes],
  },
]);
