import Button from '@shared/components/button/button';

import * as styles from './onboarding.css';
import TicketImg from '../../../public/ticket.svg';

const OnBoarding_2 = () => {
  return (
    <>
      <div className={styles.img}>
        <TicketImg />
      </div>
      <h2 className={styles.header}>3.응모는 누적 유지</h2>
      <p className={styles.description}>
        2일차, 3일차에도 이 응모권들은 그대로 추첨함에 남아
        <span className={styles.point}>자동 반영</span>
        <br />
        추가로 조각을 더 모으면, 그만큼 이름이 더 들어가
        <span className={styles.point}>당첨 확률 UP ⬆</span>
      </p>
      <h2 className={styles.header}>4. 추첨 일정</h2>
      <p className={styles.description}>
        1일차 추첨 : 9월 23일 20:30
        <br />
        2일차 추첨 : 9월 24일 17:30
        <br />
        3일차 추첨 : 9월 25일 20:30
        <br />
        Premium 추첨 : 9월 25일 20:30
      </p>
      <Button>Next</Button>
    </>
  );
};

export default OnBoarding_2;
