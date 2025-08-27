import { lazy } from 'react';

export const BlindMatchPage = lazy(
  () => import('@pages/blind-match/blind-match'),
);
export const BoothPage = lazy(() => import('@pages/booth/booth'));
export const HomePage = lazy(() => import('@pages/home/home'));
export const LandPage = lazy(() => import('@pages/land/land'));
export const LoginPage = lazy(() => import('@pages/login/login'));
export const LostItemsPage = lazy(() => import('@pages/lost-items/lost-items'));
export const TicketPage = lazy(() => import('@pages/ticket/ticket'));
export const LoginFallbackPage = lazy(
  () => import('@pages/login-fallback/login-fallback'),
);
export const AdminLoginPage = lazy(
  () => import('@pages/admin-login/admin-login'),
);
