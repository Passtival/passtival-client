import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthRefresh } from '@shared/hooks/use-auth-check';

import { routePath } from '../path';

export function ProtectedRoute() {
  const location = useLocation();
  const { isChecking, isAuthenticated } = useAuthRefresh('user');

  if (isChecking) {
    return null;
  }

  if (!isAuthenticated) {
    const currentPath = location.pathname;
    if (
      currentPath === routePath.BLIND_MATCH ||
      currentPath === routePath.TICKET
    ) {
      return (
        <Navigate
          to={routePath.LOGIN}
          replace
          state={{ from: location }}
        />
      );
    }
  }

  return <Outlet />;
}
