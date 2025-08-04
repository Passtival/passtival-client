import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@pages/login/login"));

export const loginRoutes: RouteObject[] = [
  {
    path: "/land",
    element: <Login />,
  },
];
