import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';

import * as styles from './before-match.css';
import { APPLICATION_TIME_RANGE } from '../../constants/blind-match-time';

interface BeforeMatchProps {
  currentDay: string;
}

const BeforeMatch = ({ currentDay }: BeforeMatchProps) => {
  // 일차에 따른 날짜 매핑
  const getDateByDay = (day: string) => {
    switch (day) {
      case '1일차':
        return '9/23';
      case '2일차':
        return '9/24';
      case '3일차':
        return '9/25';
      default:
        return '9/23';
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle="번호팅"
          subTitle="랜덤 매칭으로 새로운 인연을 만들어주는 서비스"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.messageContainer}>
          <p className={styles.message}>
            {getDateByDay(currentDay)} 00:00부터 신청할 수 있습니다.
          </p>
          <p className={styles.time}>{APPLICATION_TIME_RANGE}</p>
        </div>

        <Button disabled={true}>매칭 신청 대기중</Button>
      </div>
    </>
  );
};

export default BeforeMatch;
