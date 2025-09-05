import { queryOptions } from '@tanstack/react-query';

import type { LostItemResponse } from '@pages/lost-items/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { LOST_ITEM_QUERY_KEY } from '@shared/apis/keys/query-key';

export const COMMUNITY_QUERY_OPTIONS = {
  LOST_ITEMS_LIST: () => {
    return queryOptions({
      queryKey: LOST_ITEM_QUERY_KEY.LOST_ITEM_PREVIEW(),
      queryFn: getLostItemList,
    });
  },
};

export const getLostItemList = async (): Promise<LostItemResponse> => {
  const { data } = await api.get<LostItemResponse>(END_POINT.LOST_ITEMS);
  return data;
};
