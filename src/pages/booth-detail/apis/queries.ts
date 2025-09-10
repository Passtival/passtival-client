import { queryOptions } from '@tanstack/react-query';

import type {
  BoothMenuResponse,
  BoothMenuApiResponse,
  BoothActivityResponse,
  BoothActivityApiResponse,
  BoothInfoResponse,
  BoothInfoApiResponse,
} from '@pages/booth-detail/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { BOOTH_QUERY_KEY } from '@shared/apis/keys/query-key';

export const BOOTH_INFO_QUERY_OPTIONS = {
  BOOTH_INFO: (boothId: string) =>
    queryOptions<BoothInfoResponse>({
      queryKey: BOOTH_QUERY_KEY.BOOTH_INFO(boothId),
      queryFn: () => getBoothInfo(boothId),
    }),
};

export const BOOTH_MENU_QUERY_OPTIONS = {
  BOOTH_MENUS: (boothId: string) =>
    queryOptions<BoothMenuResponse>({
      queryKey: BOOTH_QUERY_KEY.BOOTH_MENUS(boothId),
      queryFn: () => getBoothMenuList(boothId),
    }),
};

export const BOOTH_ACTIVITY_QUERY_OPTIONS = {
  BOOTH_ACTIVITIES: (boothId: string) =>
    queryOptions<BoothActivityResponse>({
      queryKey: BOOTH_QUERY_KEY.BOOTH_ACTIVITIES(boothId),
      queryFn: () => getBoothActivityList(boothId),
    }),
};

export const getBoothInfo = async (
  boothId: string,
): Promise<BoothInfoResponse> => {
  const { data } = await api.get<BoothInfoApiResponse>(
    END_POINT.BOOTH_INFO.replace('{boothId}', boothId),
  );
  return data.result;
};

export const getBoothMenuList = async (
  boothId: string,
): Promise<BoothMenuResponse> => {
  const { data } = await api.get<BoothMenuApiResponse>(
    END_POINT.BOOTH_MENUS.replace('{boothId}', boothId),
  );
  return data.result ?? [];
};

export const getBoothActivityList = async (
  boothId: string,
): Promise<BoothActivityResponse> => {
  const { data } = await api.get<BoothActivityApiResponse>(
    END_POINT.BOOTH_ACTIVITIES.replace('{boothId}', boothId),
  );
  return data.result ?? [];
};
