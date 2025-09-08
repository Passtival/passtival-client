import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';
import { appConfig } from '@shared/configs/app-config';

export function AdminProtectedRoute() {
  const location = useLocation();
  const adminAccessToken = tokenService.getAdminAccessToken();

  if (!appConfig.adminAuth.isEnabled) {
    return <Outlet />;
  }

  if (!adminAccessToken) {
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
