import GlobalLayout from "@layout/globalLayout";
import Home from "@pages/home/home";
import type { RouteObject } from "react-router-dom";

export const globalRoutes: RouteObject[] = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];