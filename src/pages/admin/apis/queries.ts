import { mutationOptions } from '@tanstack/react-query';

import type {
  AdminRaffleAuthKeyResponse,
  AdminRaffleAuthKeyLevelResponse,
  MemberLevelUpRequest,
  MemberLevelUpResponse,
} from '@pages/admin/generate-auth-key/types/types';
import type {
  RaffleWinnersResponse,
  RaffleExecuteResponse,
  PremiumWinnersResponse,
  PremiumExecuteResponse,
} from '@pages/admin/ticket-drawing/types/types';
import type {
  AdminLoginRequest,
  AdminLoginResponse,
} from '@pages/admin/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { adminApi } from '@shared/apis/config/instance';
import { ADMIN_QUERY_KEY } from '@shared/apis/keys/query-key';
import { adminAuthService } from '@shared/auth/services/admin-auth-service';

export const setAdminRaffleAuthKeyLevel = async (
  level: number,
): Promise<AdminRaffleAuthKeyLevelResponse> => {
  const { data } = await adminApi.patch<AdminRaffleAuthKeyLevelResponse>(
    END_POINT.ADMIN_RAFFLE_AUTH_KEY,
    { level },
  );
  return data;
};

export const setMemberLevelUp = async (
  data: MemberLevelUpRequest,
): Promise<MemberLevelUpResponse> => {
  const { data: response } = await adminApi.patch<MemberLevelUpResponse>(
    END_POINT.MEMBER_LEVEL_UP,
    data,
  );
  return response;
};

export const executeRaffle = async (
  day: number,
): Promise<RaffleExecuteResponse> => {
  const { data } = await adminApi.post<RaffleExecuteResponse>(
    END_POINT.ADMIN_RAFFLE_DAY.replace('{day}', day.toString()),
  );
  return data;
};

export const getRaffleWinners = async (
  day: number,
): Promise<RaffleWinnersResponse> => {
  const { data } = await adminApi.get<RaffleWinnersResponse>(
    END_POINT.ADMIN_RAFFLE_WINNERS.replace('{day}', day.toString()),
  );
  return data;
};

export const executePremiumRaffle =
  async (): Promise<PremiumExecuteResponse> => {
    const { data } = await adminApi.post<PremiumExecuteResponse>(
      '/api/admin/raffle/premium',
    );
    return data;
  };

export const getPremiumRaffleWinners =
  async (): Promise<PremiumWinnersResponse> => {
    const { data } = await adminApi.get<PremiumWinnersResponse>(
      '/api/admin/raffle/premium',
    );
    return data;
  };

export const ADMIN_MUTATION_OPTIONS = {
  ADMIN_LOGIN: () =>
    mutationOptions({
      mutationKey: ADMIN_QUERY_KEY.LOGIN(),
      mutationFn: (authKey: string) =>
        adminAuthService.loginWithAuthKey(authKey),
    }),

  SET_RAFFLE_AUTH_KEY_LEVEL: () =>
    mutationOptions({
      mutationKey: ADMIN_QUERY_KEY.RAFFLE_AUTH_KEY(),
      mutationFn: setAdminRaffleAuthKeyLevel,
    }),

  SET_MEMBER_LEVEL_UP: () =>
    mutationOptions({
      mutationKey: [...ADMIN_QUERY_KEY.RAFFLE_AUTH_KEY(), 'member-level-up'],
      mutationFn: setMemberLevelUp,
    }),

  EXECUTE_RAFFLE: () =>
    mutationOptions({
      mutationKey: ADMIN_QUERY_KEY.RAFFLE_DAY(0),
      mutationFn: executeRaffle,
    }),

  EXECUTE_PREMIUM_RAFFLE: () =>
    mutationOptions({
      mutationKey: [...ADMIN_QUERY_KEY.ALL, 'raffle', 'premium', 'execute'],
      mutationFn: executePremiumRaffle,
    }),
};

export const postAdminLogin = async (
  body: AdminLoginRequest,
): Promise<AdminLoginResponse> => {
  const { data } = await adminApi.post<AdminLoginResponse>(
    END_POINT.ADMIN_LOGIN,
    body,
  );
  return data;
};

export const getAdminRaffleAuthKey =
  async (): Promise<AdminRaffleAuthKeyResponse> => {
    const { data } = await adminApi.get<AdminRaffleAuthKeyResponse>(
      END_POINT.ADMIN_RAFFLE_AUTH_KEY,
    );
    return data;
  };

export const ADMIN_QUERY_OPTIONS = {
  RAFFLE_AUTH_KEY: () => ({
    queryKey: ADMIN_QUERY_KEY.RAFFLE_AUTH_KEY(),
    queryFn: getAdminRaffleAuthKey,
  }),

  RAFFLE_WINNERS: (day: number) => ({
    queryKey: ADMIN_QUERY_KEY.RAFFLE_WINNERS(day),
    queryFn: () => getRaffleWinners(day),
    enabled: false,
  }),

  PREMIUM_RAFFLE_WINNERS: () => ({
    queryKey: [...ADMIN_QUERY_KEY.ALL, 'raffle', 'premium', 'winners'],
    queryFn: getPremiumRaffleWinners,
    enabled: false,
  }),
} as const;
