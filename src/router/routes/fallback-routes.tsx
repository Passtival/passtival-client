import type { RouteObject } from "react-router-dom";
import NotFoundPage from "@shared/components/notfoundpage";

export const fallbackRoutes: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];