import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './complete.css';

interface CompleteProps {
  currentDay: string;
}

const Complete = ({ currentDay }: CompleteProps) => {
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
            {currentDay} 매칭 신청이 완료되었습니다.
          </p>
          <p className={styles.time}>[신청 가능 시간: 00:00 ~ 17:30]</p>
          <p className={styles.caution}>
            ※ 성비 불균형으로 인해 매칭이 이루어지지 않을 수 잇습니다.
          </p>
        </div>
        <div className={styles.button}>
          <Button disabled={true}>매칭 결과 대기중</Button>

          <div className={styles.notice}>
            <IcSvgCaution style={{ width: 12, height: 12 }} />
            <p>18시에 매칭결과가 제공됩니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complete;
