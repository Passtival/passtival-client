import DetailEventInfo from '@shared/components/detail-eventinfo/detail-eventinfo'; // 컴포넌트 경로에 맞게 수정해주세요.

const Home = () => {
  const eventData = {
    label1: '운영시간',
    value1: '15:00 ~ 16:00',
    label2: '부스위치',
    value2: '20번',
    message:
      '응급 상황 대비를 위한 공간입니다. 꼭 필요한 상황에 이용해 주세요!',
  };

  return (
    <div>
      <DetailEventInfo
        label1={eventData.label1}
        label2={eventData.label2}
        value1={eventData.value1}
        value2={eventData.value2}
        message={eventData.message}
      />
      <DetailEventInfo
        label1={eventData.label1}
        label2={eventData.label2}
        value1={eventData.value1}
        value2={eventData.value2}
      />
    </div>
  );
};

export default Home;
