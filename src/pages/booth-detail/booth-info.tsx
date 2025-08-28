import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

const InfoData = {
  subTitle: '디지털미디어디자인학과',
  title: '진짜 맛집',
  time: '15:00 ~ 16:00',
  location: '20번',
  description:
    ' 맛있는 피자 치킨 돈까스 피자나라치킨공주에서 공급받아 판매중입니다',
};
const BoothInfo = () => {
  return (
    <>
      <DetailHeader
        subTitle={InfoData.subTitle}
        title={InfoData.title}
      />
      <Thumbnail
        src=""
        alt=""
        type="square_lg"
      />
      <DetailInfo
        time="운영시간"
        timevalue={InfoData.time}
        location="부스위치"
        locationvalue={InfoData.location}
      />
      <DetailDescription
        title="부스 소개"
        description={InfoData.description}
      />
    </>
  );
};

export default BoothInfo;
