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
  const isHome = pathname === routePath.HOME;
  const hasOnboardingToken = !!tokenService.getGoToOnboardingToken();

  if (isHome && !hasOnboardingToken) {
    return (
      <Navigate
        to={routePath.ONBOARDING}
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
