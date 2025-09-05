import {
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';

import { tokenService } from '@shared/auth/services/token-service';
import { rootStyle, noBackgroundColor } from '@shared/styles';

import { routePath } from './path';

export default function GlobalLayout() {
  const { pathname } = useLocation();

  const isLogin = pathname === routePath.LOGIN;

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
