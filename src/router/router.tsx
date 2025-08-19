import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './global-layout';
import MainLayout from './main-layout';
import {
  publicRoutesWithMain,
  publicRoutesOthers,
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
    ],
  },
]);
