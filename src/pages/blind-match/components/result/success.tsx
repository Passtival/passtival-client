import { useQuery } from '@tanstack/react-query';

import { BLIND_MATCH_QUERY_OPTIONS } from '@pages/blind-match/apis/queries';

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
  const { data } = useQuery(BLIND_MATCH_QUERY_OPTIONS.BLIND_MATCH_RESULT());
  return (
    <>
      <div className={styles.header}>
        <Title
          mainTitle={RESULT_TEXT.MAINTITLE}
          subTitle={RESULT_TEXT.SUBTITLE}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.title}>
          {currentDay} {RESULT_TEXT.TITLE}
        </p>
        <UserInfo
          title="나의 정보"
          instaId={data?.result?.myInfo?.instagramId ?? ''}
          phoneNumber={data?.result?.myInfo?.phoneNumber ?? ''}
        />
        <UserInfo
          title="매칭 상대의 정보"
          instaId={data?.result?.partnerInfo?.instagramId ?? ''}
          phoneNumber={data?.result?.partnerInfo?.phoneNumber ?? ''}
        />
      </div>
    </>
  );
};

export default Success;
