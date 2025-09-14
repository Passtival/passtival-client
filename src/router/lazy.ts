import { lazy } from 'react';

export const BlindMatchPage = lazy(
  () => import('@pages/blind-match/blind-match'),
);
export const BoothPage = lazy(() => import('@pages/booth/booth'));
export const BoothDetailPage = lazy(
  () => import('@pages/booth-detail/booth-detail'),
);
export const HomePage = lazy(() => import('@pages/home/home'));
export const ShowDetailPage = lazy(
  () => import('@pages/show-detail/show-detail'),
);
export const LandPage = lazy(() => import('@pages/land/land'));
export const LoginPage = lazy(() => import('@pages/login/login'));
export const LostItemsPage = lazy(() => import('@pages/lost-items/lost-items'));
export const LostItemIngoPage = lazy(
  () => import('@pages/lost-item-info/lost-item-info'),
);
export const LostItemReportPage = lazy(
  () => import('@pages/lost-item-report/lost-item-report'),
);
export const TicketPage = lazy(() => import('@pages/ticket/ticket'));
export const LoginCallbackPage = lazy(
  () => import('@pages/login-callback/login-callback'),
);
export const TicketDrawingPage = lazy(
  () => import('@pages/admin/ticket-drawing/ticket-drawing'),
);

export const AdminLoginPage = lazy(
  () => import('@pages/admin/admin-login/admin-login'),
);

export const AdminMainPage = lazy(
  () => import('@pages/admin/admin-main/admin-main'),
);

export const GenerateAuthKeyPage = lazy(
  () => import('@pages/admin/generate-auth-key/generate-auth-key'),
);

export const InfoShareConsentPage = lazy(
  () => import('@pages/info-share/info-share'),
);
export const LandingPage = lazy(() => import('@pages/land/land'));

export const TicketOnboardingPage = lazy(
  () => import('@pages/ticket-onboarding/onboarding'),
);

export const onBoardingPage = lazy(
  () => import('@pages/onboarding/onboarding'),
);
