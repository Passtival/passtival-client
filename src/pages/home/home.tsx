import DetailHeader from '@shared/components/detail-header/detail-header'; // DetailHeader 컴포넌트 import

const Home = () => {
  return (
    <div>
      {/* DetailHeader 컴포넌트 사용 */}
      <DetailHeader
        subTitle="2024년 5월 22일 ~ 5월 25일" // 원하는 subTitle 입력
        title="2024 해양 축제" // 원하는 title 입력
      />
    </div>
  );
};

export default Home;
