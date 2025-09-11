import { infiniteQueryOptions } from '@tanstack/react-query';

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

export const BOOTH_INFINITE_QUERY_OPTIONS = {
  BOOTHS_CURSOR: (size: number = 5) =>
    infiniteQueryOptions({
      queryKey: BOOTH_QUERY_KEY.ALL,
      queryFn: ({ pageParam }) => getBoothsCursor(pageParam, size),
      initialPageParam: undefined as number | undefined,
      getNextPageParam: (lastPage) => {
        if (!lastPage?.isSuccess) {
          return undefined;
        }

        const content = lastPage?.result?.content || [];
        const serverNextCursor = lastPage?.result?.nextCursor;

        if (!serverNextCursor) {
          return undefined;
        }

        if (content.length < size) {
          return undefined;
        }

        return serverNextCursor;
      },
      throwOnError: false,
    }),
} as const;
