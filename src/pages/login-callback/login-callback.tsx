import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';

const LoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== routePath.LOGIN_CALLBACK) {
      return;
    }

    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get('access_token');
    const refreshToken = query.get('refresh_token');

    if (!accessToken || !refreshToken) {
      return;
    }

    const returnTo = query.get('returnTo') || routePath.HOME;

    tokenService.saveAccessToken(accessToken);
    tokenService.saveRefreshToken(refreshToken);

    window.history.replaceState({}, document.title, returnTo);
    navigate(returnTo);
  }, [navigate, location.pathname]);

  return <div>로그인 Loading</div>;
};

export default LoginCallback;
