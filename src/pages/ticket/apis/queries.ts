import { queryOptions } from '@tanstack/react-query';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { RAFFLE_QUERY_KEY } from '@shared/apis/keys/query-key';

import type { RafflePrizesResponse } from '../types/types';

export const getRafflePrizes = async (
  days: number,
): Promise<RafflePrizesResponse> => {
  const { data } = await api.get<RafflePrizesResponse>(
    END_POINT.RAFFLE_PRIZES.replace('{days}', days.toString()),
  );
  return data;
};

export const TICKET_QUERY_OPTIONS = {
  RAFFLE_PRIZES: (days: number) =>
    queryOptions({
      queryKey: RAFFLE_QUERY_KEY.PRIZES(days),
      queryFn: () => getRafflePrizes(days),
      throwOnError: false,
    }),
} as const;
