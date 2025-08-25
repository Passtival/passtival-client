import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { authService } from '@shared/auth/services/auth-service.ts';

import { routePath } from '../path';

export function ProtectedRoute() {
  const isAuthenticated = authService.isAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    const currentPath = location.pathname;

    if (currentPath === routePath.BLIND_MATCH) {
      return (
        <Navigate
          to={routePath.LOGIN}
          replace
          state={{ from: location }}
        />
      );
    }

    return (
      <Navigate
        to={routePath.HOME}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
