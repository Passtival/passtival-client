import { queryOptions, mutationOptions } from '@tanstack/react-query';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { RAFFLE_QUERY_KEY } from '@shared/apis/keys/query-key';

import type {
  RafflePrizesResponse,
  MemberLevelUpRequest,
  MemberLevelUpResponse,
  MemberRaffleProfileResponse,
} from '../types/types';

export const setMemberLevelUp = async (
  data: MemberLevelUpRequest,
): Promise<MemberLevelUpResponse> => {
  const { data: response } = await api.patch<MemberLevelUpResponse>(
    END_POINT.MEMBER_LEVEL_UP,
    data,
  );
  return response;
};

export const TICKET_MUTATION_OPTIONS = {
  MEMBER_LEVEL_UP: () =>
    mutationOptions({
      mutationFn: setMemberLevelUp,
    }),
} as const;

export const getRafflePrizes = async (
  days: number,
): Promise<RafflePrizesResponse> => {
  const { data } = await api.get<RafflePrizesResponse>(
    END_POINT.RAFFLE_PRIZES.replace('{days}', days.toString()),
  );
  return data;
};

export const getMemberRaffleProfile =
  async (): Promise<MemberRaffleProfileResponse> => {
    const { data } = await api.get<MemberRaffleProfileResponse>(
      END_POINT.MEMBER_RAFFLE,
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
  MEMBER_RAFFLE_PROFILE: () =>
    queryOptions({
      queryKey: ['member', 'raffle', 'profile'],
      queryFn: getMemberRaffleProfile,
      throwOnError: false,
    }),
} as const;
