import Button from '@shared/components/button/button';

import * as styles from './generate-auth-key.css';

const NEW_AUTH_KEY = '새 인증키 받기';

const GenerateAuthKey = () => {
  return (
    <div className={styles.container}>
      <p className={styles.authKey}>{'D4G7A'}</p>
      <Button
        size="xl"
        onClick={() => {}}
      >
        {NEW_AUTH_KEY}
      </Button>
    </div>
  );
};

export default GenerateAuthKey;
