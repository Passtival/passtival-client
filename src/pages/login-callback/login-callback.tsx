import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';

const LoginCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const accessToken = query.get('accessToken');
    const refreshToken = query.get('refreshToken');
    const returnTo = query.get('returnTo') || routePath.HOME;

    if (!accessToken || !refreshToken) {
      navigate(routePath.LOGIN);
      return;
    }

    tokenService.saveAccessToken(accessToken);
    tokenService.saveRefreshToken(refreshToken);

    window.history.replaceState({}, document.title, returnTo);
    navigate(returnTo);
  }, [navigate]);

  return <div>로그인 Loading</div>;
};

export default LoginCallback;
