import Button from '@shared/components/button/button';

import * as styles from './onboarding.css';
import TicketImg from '../../../public/ticket.svg';

const OnBoarding_1 = () => {
  return (
    <>
      <div className={styles.img}>
        <TicketImg />
      </div>
      <h1 className={styles.title}>경품 응모 참여하는 법</h1>
      <h2 className={styles.header}>1. 조각은 누적! 리셋 X</h2>
      <p className={styles.description}>
        리플렛 1장 = 퍼즐 12조각
        <br />
        일차가 바뀌어도 조각 개수는 <span className={styles.point}>누적</span>
        됩니다. (리셋되지 않음)
        <br />
        조각 개수에 따라 레벨이 올라가고, 응모권이 늘어납니다.
      </p>
      <h2 className={styles.header}>2. 응모 방식 = 이름 넣기</h2>
      <p className={styles.description}>
        조각 4개(LV. 1) → 응모함에 이름 1번 넣기
        <br />
        조각 8개(LV. 2) → 이름 2번 넣기
        <br />
        조각 12개(LV. 3) → 이름 3번 넣기 + Premium 응모권 1개
      </p>
      <span className={styles.point}>
        즉, 최대 일반 응모 3번 + Premium 1번까지 가능!
      </span>
      <Button>Next</Button>
    </>
  );
};

export default OnBoarding_1;
