import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';
import { BOOTH_MENU_QUERY_OPTIONS } from '../apis/queries';

const MenuInfo = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('부스가 없습니다.');
  }

  const { data } = useQuery(BOOTH_MENU_QUERY_OPTIONS.BOOTH_MENUS(id));

  return (
    <>
      {data?.map((menu) => (
        <div
          className={style.boothDetailItemContainer}
          key={menu.id}
        >
          <BoothDetailItem
            name={menu.name!}
            info={menu.introduction!}
            imgSrc={menu.imagePath!}
            alt={`${menu.name} 이미지`}
            price={menu.price}
          />
        </div>
      ))}
    </>
  );
};

export default MenuInfo;
