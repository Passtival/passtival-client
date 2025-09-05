import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';

export function AdminProtectedRoute() {
  const location = useLocation();
  const adminAccessToken = tokenService.getAdminAccessToken();

  if (!adminAccessToken) {
    return (
      <Navigate
        to={routePath.ADMIN_LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
