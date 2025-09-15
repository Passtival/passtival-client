import { IcSvgCaution } from '@shared/icons';

import * as styles from './caption.css';

const INFO_TEXT = '축제 기간 중 레벨별로 한 번만 응모할 수 있습니다.';

const Caption = () => {
  return (
    <div className={styles.message}>
      <IcSvgCaution style={{ width: '1.2rem', height: '1.2rem' }} />
      <p className={styles.infoText}>{INFO_TEXT}</p>
    </div>
  );
};

export default Caption;
