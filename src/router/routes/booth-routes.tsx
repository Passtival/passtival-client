import { lazy } from "react";
import type { RouteObject } from "react-router-dom";


const Booth = lazy(() => import("@pages/booth/booth"));

export const boothRoutes: RouteObject[] = [
  {
    path: "/booth",
    element: <Booth />,
  },
];
