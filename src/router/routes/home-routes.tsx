import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@pages/home/home"));

export const homeRoutes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
];
