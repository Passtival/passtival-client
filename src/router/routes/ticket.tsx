import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Ticket = lazy(() => import("@pages/ticket/ticket"));

export const ticketRoutes: RouteObject[] = [
  {
    path: "/ticket",
    element: <Ticket />,
  },
];
