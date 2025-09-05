import Button from '@shared/components/button/button';

import * as styles from './onboarding.css';
import TicketImg from '../../../public/ticket.svg';

const OnBoarding_3 = () => {
  return (
    <>
      <TicketImg />
      <h1 className={styles.title}>3줄 요약!</h1>
      <p className={styles.description}>
        1. 조각 = 레벨업 (핀볼처럼 추첨함에 쌓임)
        <br />
        2. 최대 일반 3회 + Premium 1회
        <br />
        3. 일찍, 많이 모을수록 → 이름이 더 들어가서 당첨 확률 상승!
      </p>
      <Button>응모하러 가기</Button>
    </>
  );
};

export default OnBoarding_3;
