import { queryOptions } from '@tanstack/react-query';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { BOOTH_QUERY_KEY } from '@shared/apis/keys/query-key';

import type { BoothCursorApiResponse } from '../types/types';

export const getBoothsCursor = async (
  cursor?: number,
  size?: number,
): Promise<BoothCursorApiResponse> => {
  const { data } = await api.get<BoothCursorApiResponse>(
    END_POINT.BOOTHS_CURSOR,
    {
      params: {
        cursor,
        size,
      },
    },
  );
  return data;
};

export const BOOTH_QUERY_OPTIONS = {
  BOOTHS_CURSOR: (cursor?: number, size?: number) =>
    queryOptions({
      queryKey: BOOTH_QUERY_KEY.BOOTHS_CURSOR(cursor, size),
      queryFn: () => getBoothsCursor(cursor, size),
    }),
} as const;
