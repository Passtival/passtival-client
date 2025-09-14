import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import BoothDetailItem from '@pages/booth-detail/components/booth-detail-item/booth-detail-item';

import Loading from '@shared/components/loading/loading';

import * as style from './booth-detail.css';
import { BOOTH_ACTIVITY_QUERY_OPTIONS } from '../apis/queries';

const ActivitiesInfo = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('부스가 없습니다.');
  }

  const { data, isLoading } = useQuery(
    BOOTH_ACTIVITY_QUERY_OPTIONS.BOOTH_ACTIVITIES(id),
  );

  if (isLoading) {
    return <Loading message="체험활동을 불러오는 중..." />;
  }

  if (!data || data.length === 0) {
    return (
      <div className={style.nonetext}>
        <p>체험활동이 없습니다.</p>
      </div>
    );
  }
  return (
    <>
      {data.map((activity) => (
        <div
          className={style.boothDetailItemContainer}
          key={activity.id}
        >
          <BoothDetailItem
            name={activity.name!}
            info={activity.introduction!}
            imgSrc={activity.imagePath!}
            alt={`${activity.name} 이미지`}
            price={activity.price}
          />
        </div>
      ))}
    </>
  );
};

export default ActivitiesInfo;
