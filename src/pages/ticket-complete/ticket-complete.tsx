import Header from '@shared/components/header/header';
import Title from '@shared/components/title/title';

import * as styles from './ticket-complete.css';

const Complete = () => {
  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <div className={styles.title}>
        <Title
          mainTitle="상품 응모권"
          subTitle="상품 당첨의 기회를 잡아보세요!"
        />
      </div>
      <div className={styles.container}>
        <p className={styles.complete}>Lv.3까지 모두 응모 완료하였습니다.</p>
        <div className={styles.data}>
          <p>1일차 추첨 : 9월 23일 20:30 </p>
          <p>2일차 추첨 : 9월 24일 17:30</p>
          <p>3일차 추첨 : 9월 25일 20:30</p>
          <p>Premium 추첨 : 9월 25일 20:30</p>
        </div>
      </div>
    </>
  );
};

export default Complete;
