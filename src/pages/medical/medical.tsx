import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

const medicalMock = {
  subTitle: '의료 도움',
  title: '의료 지원국',
  time: '15:00 ~ 16:00',
  location: '20번',
  message:
    '응급 상황을 대비를 위한 공간입니다. 꼭 필요한 상황에 이용해 주세요!',
  description1:
    '응급 상황이나 사고 발생 시 간단한 처치를 받을 수 있는 의료지원 부스입니다. 구급약 얼음팩, 붕대 등이 구비되어 있으며 간단한 도움 요청이 가능합니다.',
  description2:
    '안양대학교 건강지원센터(비 501) 031-467-0795 응급 의료 상담 119',
};

const Medical = () => {
  return (
    <>
      <DetailHeader
        subTitle={medicalMock.subTitle}
        title={medicalMock.title}
      />
      <Thumbnail
        src=""
        alt=""
        type="square_lg"
      />
      <DetailInfo
        time="운영시간"
        timevalue={medicalMock.time}
        location="부스위치"
        locationvalue={medicalMock.location}
        message={medicalMock.message}
      />
      <DetailDescription
        title="부스 소개"
        description={medicalMock.description1}
      />
      <DetailDescription
        title="응급 연락처"
        description={medicalMock.description1}
      />
    </>
  );
};

export default Medical;
