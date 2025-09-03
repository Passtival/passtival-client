import { useState } from 'react';

import Title from '@shared/components/title/title';

import * as styles from './result.css';

const ResultPage = () => {
  const [isMatchingEnd, setIsMatchingEnd] = useState<boolean>(false);
  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle="번호팅"
          subTitle="랜덤 매칭으로 새로운 "
        />
      </div>
      <p className={styles.title}>1일차 매칭 결과가 나왔습니다!</p>
      <div className={styles.container}>
        {isMatchingEnd ? (
          <>
            <p className={styles.myInfo}>나의 정보</p>
            <p className={styles.instaId}>인스타그램 ID - </p>
            <p className={styles.phoneNumber}>전화번호 -</p>
            <p className={styles.opponentInfo}>매칭 상대의 정보</p>
            <p className={styles.instaId}>인스타그램 ID - </p>
            <p>전화번호 - </p>
          </>
        ) : (
          <>
            <p className={styles.message}>
              신청 인원 간 성비 불균형으로 인해 매칭이 성사되지 않았습니다.
              참여해주셔서 감사합니다.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ResultPage;
