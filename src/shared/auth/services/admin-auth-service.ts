import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';

import { tokenService } from './token-service';

export const adminAuthService = {
  /**
   * 관리자 인증키로 로그인하고 토큰을 저장합니다.
   * 성공 시 true, 실패 시 false 반환
   */
  async loginWithAuthKey(authKey: string): Promise<boolean> {
    try {
      const { data } = await api.post(END_POINT.ADMIN_LOGIN, {
        adminId: 'admin',
        authKey,
      });

      const access: string | undefined = data?.result?.accessToken;
      const refresh: string | undefined = data?.result?.refreshToken;
      const ok =
        Boolean(data?.isSuccess) && Boolean(access) && Boolean(refresh);
      if (!ok) return false;

      tokenService.saveAdminAccessToken(access!);
      tokenService.saveAdminRefreshToken(refresh!);
      return true;
    } catch {
      return false;
    }
  },
};
