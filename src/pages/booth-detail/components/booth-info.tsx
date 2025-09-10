import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getTime } from '@pages/show-detail/utils/get-time';

import DetailDescription from '@shared/components/detail-desctipion/detail-description';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import DetailHeader from '@shared/components/detail-header/detail-header';
import Loading from '@shared/components/loading/loading';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './booth-info.css';
import { BOOTH_INFO_QUERY_OPTIONS } from '../apis/queries';

const BoothInfo = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('부스가 없습니다.');
  }

  const { data, isLoading } = useQuery(BOOTH_INFO_QUERY_OPTIONS.BOOTH_INFO(id));

  if (isLoading) {
    return <Loading message="부스 정보를 불러오는 중..." />;
  }

  if (!data) {
    return <div>부스 정보를 찾을 수 없습니다.</div>;
  }

  const timeRange =
    data.operatingStart && data.operatingEnd
      ? `${getTime(data.operatingStart)} ~ ${getTime(data.operatingEnd)}`
      : '';

  return (
    <>
      <DetailHeader
        subTitle={data.department || ''}
        title={data.name || ''}
      />
      <div className={styles.thumbnailWrapper}>
        <Thumbnail
          src={data.imagePath || 'https://placehold.co/600x400'}
          alt={`${data.name} 이미지`}
          type="square_lg"
        />
      </div>
      <DetailInfo
        time="운영시간"
        timevalue={timeRange}
        location="부스위치"
        locationvalue={data.location || ''}
      />
      <DetailDescription
        title="부스 소개"
        description={data.info || ''}
      />
    </>
  );
};

export default BoothInfo;
