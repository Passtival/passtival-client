import DetailEventInfo from '@shared/components/detail-eventinfo/detail-info'; // 컴포넌트 경로에 맞게 수정해주세요.

const Home = () => {
  const eventData = {
    title: '내가 잃어버린 지갑',
    time1: '운영시간',
    location1: '15:00 ~ 16:00',
    time2: '부스위치',
    location2: '20번',
    message:
      '응급 상황 대비를 위한 공간입니다. 꼭 필요한 상황에 이용해 주세요!',
  };

  return (
    <div>
      <DetailEventInfo
        title={eventData.title}
        time1={eventData.time1}
        time2={eventData.time2}
        location1={eventData.location1}
        location2={eventData.location2}
        message={eventData.message}
      />
      <DetailEventInfo
        time1={eventData.time1}
        time2={eventData.time2}
        location1={eventData.location1}
        location2={eventData.location2}
      />
    </div>
  );
};

export default Home;
