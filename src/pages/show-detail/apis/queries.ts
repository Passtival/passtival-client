import { queryOptions } from '@tanstack/react-query';

import type { ShowDetailResponse } from '@pages/show-detail/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { PERFORMANCES_QUERY_KEY } from '@shared/apis/keys/query-key';

export const COMMUNITY_QUERY_OPTIONS = {
  PERFORMANCES_LIST: () => {
    return queryOptions({
      queryKey: PERFORMANCES_QUERY_KEY.PERFORMANCES_PREVIEW(),
      queryFn: getPerformancesList,
    });
  },
};

export const getPerformancesList = async (): Promise<ShowDetailResponse> => {
  const { data } = await api.get<ShowDetailResponse>(
    END_POINT.PERFORMANCES_INFO,
  );
  return data;
};
