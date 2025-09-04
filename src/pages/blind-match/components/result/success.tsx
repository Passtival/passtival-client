import Title from '@shared/components/title/title';

import * as styles from './result.css';
import UserInfo from '../user-info/user-info';

const RESULT_TEXT = {
  MAINTITLE: '번호팅',
  SUBTITLE: '랜덤 매칭으로 새로운 인연을 만들어주는 서비스',
  TITLE: '매칭 결과가 나왔습니다!',
};

interface SuccessProps {
  currentDay: string;
}

const Success = ({ currentDay }: SuccessProps) => {
  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle={RESULT_TEXT.MAINTITLE}
          subTitle={RESULT_TEXT.SUBTITLE}
        />
      </div>
      <p className={styles.title}>
        {currentDay} {RESULT_TEXT.TITLE}
      </p>
      <UserInfo
        title="나의 정보"
        instaId="안녕하신지요"
        phoneNumber="010-1588-1588"
      />
      <UserInfo
        title="매칭 상대의 정보"
        instaId=""
        phoneNumber=""
      />
    </>
  );
};

export default Success;
