import Carousel from '@shared/components/carousel/carousel';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';

const mockImages = ['안녕하세요', '두번째', '내가 잃어버린 초코파이'];

const InfoMock = {
  title: '100만원',
  timevalue: '9/23 15:00',
  locationvalue: '3번째 소나무 5번째 뿌리',
};

const LostItemsInfo = () => {
  return (
    <>
      <Carousel type="details">
        {mockImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`분실물 이미지 ${index + 1}`}
          />
        ))}
      </Carousel>
      <DetailInfo
        title={InfoMock.title}
        time="습득시간"
        timevalue={InfoMock.timevalue}
        location="습득위치"
        locationvalue={InfoMock.locationvalue}
      />
    </>
  );
};
export default LostItemsInfo;
