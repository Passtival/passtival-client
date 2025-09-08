import { IcSvgError } from '@shared/icons';

import * as styles from './error.css';

const CONTENT = {
  TITLE: '에러가 발생했습니다',
  DESCRIPTION: '조금 뒤 다시 시도해 주십시오.',
};

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <IcSvgError />
      <p className={styles.title}>{CONTENT.TITLE}</p>
      <p className={styles.description}>{CONTENT.DESCRIPTION}</p>
    </div>
  );
};

export default ErrorPage;
