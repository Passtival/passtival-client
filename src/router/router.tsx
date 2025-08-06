import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './global-layout';
import { publicRoutes } from './routes/global-routes';

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [...publicRoutes],
  },
]);
