import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import { appConfig } from '@shared/configs/app-config';
import { useAuthRefresh } from '@shared/hooks/use-auth-check';

export function AdminProtectedRoute() {
  const location = useLocation();
  const { isChecking, isAuthenticated } = useAuthRefresh('admin');

  if (isChecking) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={appConfig.adminAuth.loginFailureUrl || routePath.ADMIN_LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
