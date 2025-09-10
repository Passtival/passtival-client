import { routePath } from '@router/path';

import { appConfig } from '@shared/configs/app-config';
import { IcSvgKakaoTalk } from '@shared/icons';

import * as styles from './kakao-login-button.css';

const BUTTON_TEXT = '카카오 로그인';

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    const returnTo = location.pathname + location.search;
    const redirectUrl = `${location.origin}${routePath.LOGIN_CALLBACK}`;
    window.location.href =
      `${appConfig.api.baseUrl}/api/member/login/kakao` +
      `?returnTo=${encodeURIComponent(returnTo)}` +
      `&redirectUrl=${encodeURIComponent(redirectUrl)}`;
  };

  return (
    <button
      className={styles.container}
      onClick={handleKakaoLogin}
    >
      <IcSvgKakaoTalk
        width="3.2rem"
        height="2.7rem"
      />
      <p className={styles.text}>{BUTTON_TEXT}</p>
    </button>
  );
};

export default KakaoLoginButton;
