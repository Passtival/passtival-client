import { IcSvgCaution } from '@shared/icons';

import * as styles from './caption.css';

const Caption = () => {
  return (
    <div className={styles.message}>
      <IcSvgCaution style={{ width: '1.2rem', height: '1.2rem' }} />
      축제 기간 중 일차 별로 한 번만 응모할 수 있습니다.
    </div>
  );
};

export default Caption;
