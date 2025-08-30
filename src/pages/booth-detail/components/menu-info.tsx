import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';

interface BoothDetailItemProps {
  name: string;
  info: string;
  imgSrc: string;
  alt: string;
  price?: number | string;
}

const MENU_ITEMS: Record<string, BoothDetailItemProps[]> = {
  '1': [
    {
      name: '카레 우동',
      info: '갓 지은 돌볶음 취두부 곰팡이 팔지마세요 갓 지은 돌볶음 취두부 곰팡이 팔지마세요 갓 지은 돌볶음 취두부 곰팡이 팔지마세요',
      imgSrc: '',
      alt: '카레 우동 이미지',
      price: 3000,
    },
    {
      name: '애플 파이',
      info: '애플 바라기 프론트들이 구운 상큼하고 달달한 애플 파이',
      imgSrc: '',
      alt: '애플 파이 이미지',
      price: 4000,
    },
  ],
  '2': [
    {
      name: 'CPU 초밥',
      info: '오도독 오도독! 스트레스를 CPU 초밥으로 풀어 보세요!',
      imgSrc: '',
      alt: 'CPU 초밥 이미지',
      price: 4000,
    },
    {
      name: '깃 브랜치 무침',
      info: '와득와득 혀가 따끔따끔 아릴 정도의 맵기입니다.',
      imgSrc: '',
      alt: '깃 브랜치 무침 이미지',
      price: 4500,
    },
  ],
};

interface MenuInfoProps {
  id: string;
}

const MenuInfo = ({ id }: MenuInfoProps) => {
  const items = MENU_ITEMS[id] ?? [];

  if (items.length === 0) {
    return <div>해당 부스의 메뉴 정보가 없습니다.</div>;
  }

  return (
    <>
      <p className={style.text}> 판매 메뉴</p>
      {items.map((item, idx) => (
        <div
          className={style.boothDetailItemContainer}
          key={`${item.name}-${idx}`}
        >
          <BoothDetailItem
            name={item.name}
            info={item.info}
            imgSrc={item.imgSrc}
            alt={item.alt}
            price={item.price}
          />
        </div>
      ))}
    </>
  );
};

export default MenuInfo;
