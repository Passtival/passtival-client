import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getTime } from '@pages/show-detail/utils/get-time';

import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';
import TopNavigation from '@shared/components/top-navigation/top-navigation';

import { PERFORMANCE_DETAIL_QUERY_OPTIONS } from './apis/queries';
import * as styles from './show-detail.css';

const ShowDetail = () => {
  const { performanceId } = useParams<{ performanceId: string }>();

  if (!performanceId) {
    throw new Error('게시물이 없습니다.');
  }

  const { data } = useQuery(
    PERFORMANCE_DETAIL_QUERY_OPTIONS.PERFORMANCE_DETAIL(performanceId),
  );

  const timeRange =
    data?.startTime && data?.endTime
      ? `${getTime(data.startTime)} ~ ${getTime(data.endTime)}`
      : '';

  return (
    <>
      <TopNavigation title="상세 정보" />
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
        title="소개"
        description={data?.introduction}
      />
      <DetailDescription
        title="설명"
        songsData={data?.songs}
      />
    </>
  );
};

export default ShowDetail;
