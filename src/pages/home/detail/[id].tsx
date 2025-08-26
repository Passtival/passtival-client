import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

const homeDetailData = {
  subTitle: '동아리',
  title: '우주정복',
  alt: '동아리 사진',
  image: '/path/to/your/image.png',
  time: '15:00 ~ 16:00',
  location: '아리관 앞',
  description1: '안녕하세요 우주정복을 꿈 꾸는 동아리입니다.',
  description2: '엔드게임',
};

const HomeDetail = () => {
  return (
    <div>
      <DetailHeader
        subTitle={homeDetailData.subTitle}
        title={homeDetailData.title}
      />
      <Thumbnail
        src=""
        alt={homeDetailData.alt}
        type="square_lg"
      />
      <DetailInfo
        time="운영시간"
        timevalue={homeDetailData.time}
        location="공연위치"
        locationvalue={homeDetailData.location}
      />
      <DetailDescription
        title="동아리 소개"
        description={homeDetailData.description1}
      />
      <DetailDescription
        title="공연 소개"
        description={homeDetailData.description2}
      />
    </div>
  );
};

export default HomeDetail;
