import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import { postBlindMatchMyInfo } from '@pages/blind-match/apis/queries';

import { tokenService } from '@shared/auth/services/token-service';

const LoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handledRef = useRef(false);

  useEffect(() => {
    if (handledRef.current) return;
    if (location.pathname !== routePath.LOGIN_CALLBACK) return;

    const query = new URLSearchParams(location.search);
    const accessToken = query.get('access_token');
    const refreshToken = query.get('refresh_token');
    const returnTo = query.get('returnTo') || routePath.HOME;

    if (!accessToken || !refreshToken) return;

    handledRef.current = true;

    const cleanCallbackUrl = routePath.LOGIN_CALLBACK;
    window.history.replaceState({}, document.title, cleanCallbackUrl);

    tokenService.saveAccessToken(accessToken);
    tokenService.saveRefreshToken(refreshToken);

    (async () => {
      try {
        await postBlindMatchMyInfo();
        navigate(returnTo, { replace: true });
      } catch (e) {
        console.error(e);
        navigate(routePath.LOGIN, { replace: true });
      }
    })();
  }, [navigate, location.pathname, location.search]);

  return <div>로그인 Loading…</div>;
};

export default LoginCallback;
