import { appConfig } from '@shared/configs/app-config';
import { IcSvgKakaoTalk } from '@shared/icons';

import * as styles from './kakao-login-button.css';

const BUTTON_TEXT = '카카오 로그인';

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    const redirectUri =
      window.location.hostname === 'localhost'
        ? appConfig.auth.kakaoLocalRedirectUrl
        : appConfig.auth.kakaoProdRedirectUrl;

    const loginUrl = `${appConfig.auth.kakaoLoginUrl}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = loginUrl;
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
