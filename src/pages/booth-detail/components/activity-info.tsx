import BoothDetailItem from '@pages/booth/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';

interface BoothDetailItemProps {
  name: string;
  info: string;
  imgSrc: string;
  alt: string;
}

const ACTIVITY_ITEMS: Record<string, BoothDetailItemProps[]> = {
  '1': [
    {
      name: '10분 컷 도예 물레',
      info: '돌돌돌돌 돌리고 빚고, 나만의 미니 컵을 만들어 볼까요?',
      imgSrc: '',
      alt: '도예 물레 체험',
    },
    {
      name: '실크 스크린 체험',
      info: '컴공인들이 머리 맞대고 만든 실크 스크린 기계를 체험해 보세요!',
      imgSrc: '',
      alt: '실크 스크린 기계',
    },
  ],
  '2': [
    {
      name: '미로 찾기',
      info: '엉키고 꼬여버린 깃 미로의 끝을 찾아 보세요!',
      imgSrc: '',
      alt: '미로 찾기',
    },
    {
      name: '틀린 그림 찾기',
      info: '피그마에서 간격이 다른 부분을 찾아 보세요!',
      imgSrc: '',
      alt: '틀린 그림 찾기',
    },
  ],
};

interface ActivityInfoProps {
  id: string;
}

const ActivitiesInfo = ({ id }: ActivityInfoProps) => {
  const items = ACTIVITY_ITEMS[id] ?? [];

  if (items.length === 0) {
    return <div>해당 부스의 체험 활동 정보가 없습니다.</div>;
  }

  return (
    <>
      <p className={style.text}>체험 활동</p>
      {items.map((item, idx) => (
        <div
          className={style.boothDetailItemContainer}
          key={`${item.name}-${idx}`}
        >
          <BoothDetailItem {...item} />
        </div>
      ))}
    </>
  );
};

export default ActivitiesInfo;
