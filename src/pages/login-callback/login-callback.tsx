import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { routePath } from '@router/path';

import {
  postBlindMatchMyInfo,
  getBlindMatchMyInfo,
} from '@pages/blind-match/apis/queries';

import { tokenService } from '@shared/auth/services/token-service';

const LoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== routePath.LOGIN_CALLBACK) return;

    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get('access_token');
    const refreshToken = query.get('refresh_token');
    const returnTo = query.get('returnTo') || routePath.HOME;

    if (!accessToken || !refreshToken) return;

    tokenService.saveAccessToken(accessToken);
    tokenService.saveRefreshToken(refreshToken);

    (async () => {
      try {
        await postBlindMatchMyInfo();

        const data = await getBlindMatchMyInfo();
        console.log('blind-match meget:', data);

        window.history.replaceState({}, document.title, returnTo);
        navigate(returnTo);
      } catch (e) {
        console.error(e);
        navigate(routePath.LOGIN);
      }
    })();
  }, [navigate, location.pathname]);

  return <div>로그인 Loading…</div>;
};

export default LoginCallback;
