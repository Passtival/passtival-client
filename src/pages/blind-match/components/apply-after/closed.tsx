import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './complete.css';
import { APPLICATION_TIME_RANGE } from '../../constants/blind-match-time';

interface CompleteProps {
  currentDay: string;
}

const Closed = ({ currentDay }: CompleteProps) => {
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
            {currentDay} 매칭 신청이 마감되었습니다.
          </p>
          <p className={styles.time}>{APPLICATION_TIME_RANGE}</p>
        </div>

        <Button disabled={true}>매칭 결과 대기중</Button>

        <div className={styles.notice}>
          <IcSvgCaution style={{ width: 12, height: 12 }} />
          <p>00시부터 신청 가능합니다.</p>
        </div>
      </div>
    </>
  );
};

export default Closed;
