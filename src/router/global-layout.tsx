import {
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';

import { authService } from '@shared/auth/services/auth-service';
import { tokenService } from '@shared/auth/services/token-service';
import { rootStyle, noBackgroundColor } from '@shared/styles';

import { routePath } from './path';

export default function GlobalLayout() {
  const { pathname } = useLocation();

  const isLogin = pathname === routePath.LOGIN;
  const isLoginCallback = pathname === routePath.LOGIN_CALLBACK;
  const isLand = pathname === routePath.LAND;
  const isOnboarding = pathname === routePath.ONBOARDING;
  const hasOnboardingToken = !!tokenService.getGoToOnboardingToken();
  const isAuthenticated = authService.isAuthenticated();

  const isOnboardingRelatedPage =
    isLogin || isLoginCallback || isLand || isOnboarding;

  if (!hasOnboardingToken && !isOnboardingRelatedPage && !isAuthenticated) {
    return (
      <Navigate
        to={routePath.LAND}
        replace
      />
    );
  }

  const isTicket = pathname === routePath.TICKET;
  const hasTicketOnboardingToken = !!tokenService.getTicketOnboardingToken();

  if (isTicket && !hasTicketOnboardingToken) {
    return (
      <Navigate
        to={routePath.TICKET_ONBOARDING}
        replace
      />
    );
  }

  return (
    <div className={isLogin ? noBackgroundColor : rootStyle}>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
