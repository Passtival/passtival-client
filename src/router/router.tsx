import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './global-layout';
import { routeePath } from './path';
import { publicRoutes } from './routes/global-routes';

export const router = createBrowserRouter([
  {
    path: routeePath.HOME, // or routeePath.LAYOUT if 레이아웃 전용 path가 있다면
    element: <GlobalLayout />,
    children: [...publicRoutes],
  },
]);
