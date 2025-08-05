import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './global-layout';
import { routeePath } from './path';
import { publicRoutes } from './routes/global-routes';

export const router = createBrowserRouter([
  {
    path: routeePath.HOME,
    element: <GlobalLayout />,
    children: [...publicRoutes],
  },
]);
