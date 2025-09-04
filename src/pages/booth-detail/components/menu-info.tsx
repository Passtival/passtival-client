import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';

interface MenuInfoProps {
  id: string;
}

const MOCK_MENU_ITEM = {
  result: [
    {
      id: 1,
      name: '카레 우동',
      info: '갓 지은 돌볶음 취두부 곰팡이 팔지마세요',
      imgSrc: 'https://placehold.co/600x400',
      alt: '카레 우동 이미지',
      price: 3000,
    },
    {
      id: 1,
      name: '애플 파이',
      info: '애플 바라기 프론트들이 구운 상큼하고 달달한 애플 파이',
      imgSrc: 'https://placehold.co/600x400',
      alt: '애플 파이 이미지',
      price: 4000,
    },

    {
      id: 2,
      name: 'CPU 초밥',
      info: '오도독 오도독! 스트레스를 CPU 초밥으로 풀어 보세요!',
      imgSrc: 'https://placehold.co/600x400',
      alt: 'CPU 초밥 이미지',
      price: 4000,
    },
    {
      id: 2,
      name: '깃 브랜치 무침',
      info: '와득와득 혀가 따끔따끔 아릴 정도의 맵기입니다',
      imgSrc: 'https://placehold.co/600x400',
      alt: '깃 브랜치 무침 이미지',
      price: 4500,
    },
  ],
} as const;

const MenuInfo = ({ id: _id }: MenuInfoProps) => {
  return (
    <>
      {MOCK_MENU_ITEM.result.map(({ id, name, info, imgSrc, alt, price }) => (
        <div
          className={style.boothDetailItemContainer}
          key={id}
        >
          <BoothDetailItem
            name={name}
            info={info}
            imgSrc={imgSrc}
            alt={alt}
            price={price}
          />
        </div>
      ))}
    </>
  );
};

export default MenuInfo;
