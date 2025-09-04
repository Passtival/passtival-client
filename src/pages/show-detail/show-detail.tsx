import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import { PERFORMANCE_DETAIL_QUERY_OPTIONS } from './apis/queries';
import * as styles from './show-detail.css';

const Time = (isoString: string) => {
  const date = new Date(isoString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const ShowDetail = () => {
  const { performanceId } = useParams<{ performanceId: string }>();

  const { data } = useQuery({
    ...PERFORMANCE_DETAIL_QUERY_OPTIONS.PERFORMANCE_DETAIL(
      performanceId as string,
    ),
    enabled: !!performanceId,
  });

  const timeRange =
    data?.startTime && data?.endTime
      ? `${Time(data.startTime)} ~ ${Time(data.endTime)}`
      : '';

  return (
    <>
      <DetailHeader
        subTitle={data?.title}
        title={data?.artist}
      />
      <div className={styles.thumbnailWrapper}>
        <Thumbnail
          src={data?.imagePath}
          alt={data?.imagePath}
          type="square_lg"
        />
      </div>
      <DetailInfo
        time="운영시간"
        timevalue={timeRange}
        location="공연위치"
        locationvalue={data?.area}
      />
      <DetailDescription
        title="동아리 소개"
        description={data?.introduction}
      />
      <DetailDescription
        title="공연 소개"
        songsData={data?.songs}
      />
    </>
  );
};

export default ShowDetail;
