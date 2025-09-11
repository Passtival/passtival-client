import { queryOptions } from '@tanstack/react-query';

import type {
  PerformanceList,
  PerformanceListApiResponse,
} from '@pages/home/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { PERFORMANCES_QUERY_KEY } from '@shared/apis/keys/query-key';

export const PERFORMANCE_QUERY_OPTIONS = {
  PERFORMANCE_LIST: () => {
    return queryOptions<PerformanceList>({
      queryKey: PERFORMANCES_QUERY_KEY.PERFORMANCE_PREVIEW(),
      queryFn: getPerformanceList,
    });
  },
};

export const getPerformanceList = async (): Promise<PerformanceList> => {
  const { data } = await api.get<PerformanceListApiResponse>(
    END_POINT.PERFORMANCES,
  );
  return data.result ?? [];
};
