import { queryOptions } from '@tanstack/react-query';

import type { ShowDetailResponse } from '@pages/show-detail/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { PERFORMANCES_QUERY_KEY } from '@shared/apis/keys/query-key';

export const PERFORMANCE_DETAIL_QUERY_OPTIONS = {
  PERFORMANCE_DETAIL: (performanceId: string) =>
    queryOptions({
      queryKey: PERFORMANCES_QUERY_KEY.PERFORMANCE_DETAIL(performanceId),
      queryFn: () => getPerformanceDetail(performanceId),
    }),
};

export const getPerformanceDetail = async (
  performanceId: string,
): Promise<ShowDetailResponse> => {
  const { data } = await api.get<ShowDetailResponse>(
    END_POINT.PERFORMANCES_INFO.replace('{performanceId}', performanceId),
  );
  return data;
};
