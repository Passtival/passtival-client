import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import * as style from './booth-detail.css';
import { BOOTH_MENU_QUERY_OPTIONS } from '../apis/queries';

const MenuInfo = () => {
  const { boothId } = useParams<{ boothId: string }>();

  if (!boothId) {
    throw new Error('부스가 없습니다.');
  }

  const { data } = useQuery(BOOTH_MENU_QUERY_OPTIONS.BOOTH_MENU_ITEM());

  return (
    <>
      {data?.result?.map((m) => (
        <div
          className={style.boothDetailItemContainer}
          key={boothId}
        >
          <BoothDetailItem
            name={m.name ?? ''}
            info={m.introduction ?? ''}
            imgSrc={m.imagePath ?? ''}
            alt={`${m.name ?? '메뉴'} 이미지`}
            price={m.price ?? 0}
          />
        </div>
      ))}
    </>
  );
};

export default MenuInfo;
