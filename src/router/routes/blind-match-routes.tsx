import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const BlindMatch = lazy(() => import("@pages/blind-match/blind-match"));

export const blindMatchRoutes: RouteObject[] = [
  {
    path: "/blind-match",
    element: <BlindMatch />,
  },
];