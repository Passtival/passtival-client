import Title from '@shared/components/title/title';

import * as styles from './result.css';

const Fail = () => {
  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle="번호팅"
          subTitle="랜덤 매칭으로 새로운 인연을 만들어주는 서비스"
        />
      </div>
      <p className={styles.title}>1일차 매칭 결과가 나왔습니다!</p>
      <p className={styles.message}>
        신청 인원 간 성비 불균형으로 인해 매칭이 성사되지 않았습니다.
        <span className={styles.thankyou}>참여해주셔서 감사합니다.</span>
      </p>
    </>
  );
};

export default Fail;
