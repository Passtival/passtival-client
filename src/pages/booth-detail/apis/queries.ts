import { queryOptions } from '@tanstack/react-query';

import type { BoothMenuResponse } from '@pages/booth-detail/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { BOOTH_QUERY_KEY } from '@shared/apis/keys/query-key';

export const BOOTH_MENU_QUERY_OPTIONS = {
  BOOTH_MENU_ITEM: (boothId: string) =>
    queryOptions({
      queryKey: BOOTH_QUERY_KEY.BOOTH_MENU_ITEM(boothId),
      queryFn: () => getBoothMenuList(boothId),
    }),
};

export const getBoothMenuList = async (
  boothId: string,
): Promise<BoothMenuResponse['result']> => {
  const { data } = await api.get<BoothMenuResponse>(
    END_POINT.BOOTH_MENUS.replace('{boothId}', boothId),
  );
  return data.result;
};
