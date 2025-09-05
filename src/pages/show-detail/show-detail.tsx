import { useParams } from 'react-router';

import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './show-detail.css';

const homeDetailData = {
  '1': {
    subTitle: '동아리',
    title: '우주정복',
    alt: '동아리 사진',
    image: '',
    time: '15:00 ~ 16:00',
    location: '아리관 앞',
    description1: '안녕하세요 우주정복을 꿈 꾸는 동아리입니다.',
    description2: '엔드게임',
  },
  '2': {
    subTitle: '공연',
    title: '데몬헌터스',
    alt: '공연 사진',
    image: '',
    time: '14:00 ~ 15:00',
    location: '비전관',
    description1: '멋지세요',
    description2: '울랄라세션',
  },
};

const ShowDetail = () => {
  const { id } = useParams();
  const mockData = homeDetailData[id as keyof typeof homeDetailData];

  return (
    <>
      <DetailHeader
        subTitle={mockData.subTitle}
        title={mockData.title}
      />
      <div className={styles.thumbnailWrapper}>
        <Thumbnail
          src="https://placehold.co/600x400"
          alt={mockData.alt}
          type="square_lg"
        />
      </div>
      <DetailInfo
        time="운영시간"
        timevalue={mockData.time}
        location="공연위치"
        locationvalue={mockData.location}
      />
      <DetailDescription
        title="동아리 소개"
        description={mockData.description1}
      />
      <DetailDescription
        title="공연 소개"
        description={mockData.description2}
      />
    </>
  );
};

export default ShowDetail;
