import KakaoLoginButton from '@shared/components/kakao-login-button/kakao-login-button';

import * as styles from './login.css';

const LOGIN_TEXT = {
  TITLE: '로그인 후 사용 가능한 서비스입니다',
  DESCRIPTION:
    '번호팅 서비스는 중복참여, 매칭 결과 제공을 위해서 로그인시 참여 가능합니다.',
};

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1 className={styles.title}>{LOGIN_TEXT.TITLE}</h1>
        <p className={styles.description}>{LOGIN_TEXT.DESCRIPTION}</p>
      </div>
      <div className={styles.kakaoButton}>
        <KakaoLoginButton />
      </div>
    </div>
  );
};

export default Login;
