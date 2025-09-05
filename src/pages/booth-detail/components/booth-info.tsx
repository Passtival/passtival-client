import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './booth-info.css';

const InfoData = {
  '1': {
    subTitle: '디지털미디어디자인학과',
    title: '진짜 맛집',
    time: '15:00 ~ 16:00',
    location: '20번',
    description:
      '맛있는 피자 치킨 돈까스 피자나라치킨공주에서 공급받아 판매중입니다',
  },
  '2': {
    subTitle: '컴퓨터공학과',
    title: '셔츠 맛집',
    time: '13:00 ~ 14:00',
    location: '15번',
    description: 'git push 손뼉치기 게임을 진행중입니다.',
  },
};

interface BoothInfoProps {
  id: string;
}

const BoothInfo = ({ id }: BoothInfoProps) => {
  const boothInfo = InfoData[id as keyof typeof InfoData];

  return (
    <>
      <DetailHeader
        subTitle={boothInfo.subTitle}
        title={boothInfo.title}
      />
      <div className={styles.thumbnailWrapper}>
        <Thumbnail
          src="https://placehold.co/600x400"
          alt=""
          type="square_lg"
        />
      </div>
      <DetailInfo
        time="운영시간"
        timevalue={boothInfo.time}
        location="부스위치"
        locationvalue={boothInfo.location}
      />
      <DetailDescription
        title="부스 소개"
        description={boothInfo.description}
      />
    </>
  );
};

export default BoothInfo;
