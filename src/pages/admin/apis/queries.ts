import { mutationOptions } from '@tanstack/react-query';

import type {
  AdminLoginRequest,
  AdminLoginResponse,
} from '@pages/admin/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { ADMIN_QUERY_KEY } from '@shared/apis/keys/query-key';
import { adminAuthService } from '@shared/auth/services/admin-auth-service';

export const postAdminLogin = async (
  body: AdminLoginRequest,
): Promise<AdminLoginResponse> => {
  const { data } = await api.post<AdminLoginResponse>(
    END_POINT.ADMIN_LOGIN,
    body,
  );
  return data;
};

export const ADMIN_MUTATION_OPTIONS = {
  ADMIN_LOGIN: () =>
    mutationOptions({
      mutationKey: ADMIN_QUERY_KEY.ADMIN_LOGIN(),
      mutationFn: (authKey: string) =>
        adminAuthService.loginWithAuthKey(authKey),
    }),
};
