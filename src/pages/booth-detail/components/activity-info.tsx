import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';

interface ActivityInfoProps {
  id: string;
}

const MOCK_ACTIVITY_ITEM = {
  result: [
    {
      id: 1,
      name: '10분 컷 도예 물레',
      info: '돌돌돌돌 돌리고 빚고, 나만의 미니 컵을 만들어 볼까요?',
      imgSrc: 'https://placehold.co/600x400',
      alt: '도예 물레 체험',
    },
    {
      id: 1,
      name: '실크 스크린 체험',
      info: '컴공인들이 머리 맞대고 만든 실크 스크린 기계를 체험해 보세요!',
      imgSrc: 'https://placehold.co/600x400',
      alt: '실크 스크린 기계',
    },
    {
      id: 2,
      name: '미로 찾기',
      info: '엉키고 꼬여버린 깃 미로의 끝을 찾아 보세요!',
      imgSrc: 'https://placehold.co/600x400',
      alt: '미로 찾기',
    },
    {
      id: 2,
      name: '틀린 그림 찾기',
      info: '피그마에서 간격이 다른 부분을 찾아 보세요!',
      imgSrc: 'https://placehold.co/600x400',
      alt: '틀린 그림 찾기',
    },
  ],
};

const ActivitiesInfo = ({ id: _id }: ActivityInfoProps) => {
  return (
    <>
      {MOCK_ACTIVITY_ITEM.result.map(({ id, name, info, imgSrc, alt }) => (
        <div
          className={style.boothDetailItemContainer}
          key={id}
        >
          <BoothDetailItem
            name={name}
            info={info}
            imgSrc={imgSrc}
            alt={alt}
          />
        </div>
      ))}
    </>
  );
};

export default ActivitiesInfo;
