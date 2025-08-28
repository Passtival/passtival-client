import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Carousel from '@shared/components/carousel/carousel';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import TopNavigation from '@shared/components/top-navigation/top-navigation';
import { IcSvgTrashcan } from '@shared/icons';

import * as styles from './lost-item-info.css';

const mockImages = ['안녕하세요', '두번째', '내가 잃어버린 초코파이'];

const InfoMock = {
  '1': {
    title: '100만원',
    timevalue: '9/23 15:00',
    locationvalue: '3번째 소나무 5번째 뿌리',
  },
};

const LostItemsInfo = () => {
  const { id } = useParams();
  const mockData = InfoMock[id as keyof typeof InfoMock];
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    const userRole: 'user' | 'admin' = 'admin';
    setIsAdmin(userRole === 'admin');
  }, []);

  const handleTrashcanClick = () => {
    console.log(`분실물 삭제`);
  };

  return (
    <>
      <TopNavigation
        title="분실물 상세 정보"
        rightIcon={isAdmin ? <IcSvgTrashcan className={styles.icon} /> : null}
        onRightClick={isAdmin ? handleTrashcanClick : undefined}
      />
      <div className={styles.container}>
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
          title={mockData.title}
          time="습득시간"
          timevalue={mockData.timevalue}
          location="습득위치"
          locationvalue={mockData.locationvalue}
        />
      </div>
    </>
  );
};
export default LostItemsInfo;
