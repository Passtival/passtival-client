import { createBrowserRouter } from "react-router-dom";
import { blindMatchRoutes } from "@routes/blind-match-routes";
import { boothRoutes } from "@routes/booth-routes";
import { homeRoutes } from "@routes/home-routes";
import { landRoutes } from "@routes/land-routes";
import { loginRoutes } from "@routes/login-routes";
import { lostItemsRoutes } from "@routes/lost-items-router";
import { ticketRoutes } from "@routes/ticket";

// 필요한 도메인 라우트 import
// 나중에 fallbackRoutes, 글로벌 layout 등도 포함 가능

export const router = createBrowserRouter([
    ...blindMatchRoutes,
    ...boothRoutes,
    ...homeRoutes,
    ...landRoutes,
    ...loginRoutes,
    ...lostItemsRoutes,
    ...ticketRoutes,
]);