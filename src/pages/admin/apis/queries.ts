import { mutationOptions } from '@tanstack/react-query';

import type {
  AdminRaffleAuthKeyResponse,
  AdminRaffleAuthKeyLevelResponse,
  MemberLevelUpRequest,
  MemberLevelUpResponse,
} from '@pages/admin/generate-auth-key/types/types';
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
} as const;
