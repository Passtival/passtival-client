import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { authService } from '@shared/auth/services/auth-service.ts';

import { routePath } from '../path';

export function ProtectedRoute() {
  const isAuthenticated = authService.isAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={routePath.LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }
  return <Outlet />;
}
