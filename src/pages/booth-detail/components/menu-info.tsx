import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import Loading from '@shared/components/loading/loading';

import * as style from './booth-detail.css';
import { BOOTH_MENU_QUERY_OPTIONS } from '../apis/queries';

const MenuInfo = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('부스가 없습니다.');
  }

  const { data, isLoading } = useQuery(
    BOOTH_MENU_QUERY_OPTIONS.BOOTH_MENUS(id),
  );

  if (isLoading) {
    return <Loading message="메뉴를 불러오는 중..." />;
  }

  if (!data || data.length === 0) {
    return (
      <div className={style.nonetext}>
        <p>메뉴가 없습니다.</p>
      </div>
    );
  }

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
