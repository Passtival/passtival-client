import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LostItems = lazy(() => import("@pages/lost-items/lost-items"));

export const lostItemsRoutes: RouteObject[] = [
  {
    path: "/lost-items",
    element: <LostItems />,
  },
];
