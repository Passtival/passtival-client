import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import { PERFORMANCE_DETAIL_QUERY_OPTIONS } from './apis/queries';
import * as styles from './show-detail.css';

const ShowDetail = () => {
  const { performanceId } = useParams<{ performanceId: string }>();

  const queryOptions = PERFORMANCE_DETAIL_QUERY_OPTIONS.PERFORMANCE_DETAIL(
    performanceId as string,
  );

  const { data } = useQuery({
    ...queryOptions,
    enabled: !!performanceId,
  });

  return (
    <>
      <DetailHeader
        subTitle={data?.title}
        title={data?.artist}
      />
      <div className={styles.thumbnailWrapper}>
        <Thumbnail
          src=""
          alt={data?.imagePath}
          type="square_lg"
        />
      </div>
      <DetailInfo
        time="운영시간"
        timevalue={data?.startTime}
        location="공연위치"
        locationvalue={data?.area}
      />
      <DetailDescription
        title="동아리 소개"
        description={data?.introduction}
      />
      <DetailDescription
        title="공연 소개"
        description={''}
      />
    </>
  );
};

export default ShowDetail;
