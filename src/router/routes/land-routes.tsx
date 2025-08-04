import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Land = lazy(() => import("@pages/land/land"));

export const landRoutes: RouteObject[] = [
  {
    path: "/land",
    element: <Land />,
  },
];
