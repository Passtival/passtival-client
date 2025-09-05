import Title from '@shared/components/title/title';

import * as styles from './result.css';

const RESULT_TEXT = {
  MAINTITLE: '번호팅',
  SUBTITLE: '랜덤 매칭으로 새로운 인연을 만들어주는 서비스',
  MESSAGE: `신청 인원 간 성비 불균형으로 인해
매칭이 성사되지 않았습니다.

참여해주셔서 감사합니다.`,
};

interface FailProps {
  currentDay: string;
}

const Fail = ({ currentDay }: FailProps) => {
  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle={RESULT_TEXT.MAINTITLE}
          subTitle={RESULT_TEXT.SUBTITLE}
        />
      </div>
      <p className={styles.title}>{currentDay} 매칭 결과가 나왔습니다!</p>
      <p className={styles.message}>{RESULT_TEXT.MESSAGE}</p>
    </>
  );
};

export default Fail;
