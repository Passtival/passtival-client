import { useEffect, useState } from 'react';

import { api } from '@shared/apis/config/instance';
import { tokenService } from '@shared/auth/services/token-service';
import { appConfig } from '@shared/configs/app-config';

type AuthType = 'user' | 'admin';

export const useAuthRefresh = (authType: AuthType) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAdmin = authType === 'admin';
      const accessToken = isAdmin
        ? tokenService.getAdminAccessToken()
        : tokenService.getAccessToken();

      const refreshToken = isAdmin
        ? tokenService.getAdminRefreshToken()
        : tokenService.getRefreshToken();

      const authConfig = isAdmin ? appConfig.adminAuth : appConfig.auth;

      if (!authConfig.isEnabled) {
        setIsAuthenticated(true);
        setIsChecking(false);
        return;
      }

      if (accessToken) {
        setIsAuthenticated(true);
        setIsChecking(false);
        return;
      }

      if (refreshToken) {
        try {
          const response = await api.post('/api/auth/refresh', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });

          console.log('토큰 재발급 응답 result:', response.data.result); // result 전체 구조 확인

          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            response.data.result;

          // refreshToken이 없으면 기존 refreshToken 유지
          const finalRefreshToken = newRefreshToken || refreshToken;

          if (isAdmin) {
            tokenService.saveAdminAccessToken(newAccessToken);
            tokenService.saveAdminRefreshToken(finalRefreshToken);
          } else {
            tokenService.saveAccessToken(newAccessToken);
            tokenService.saveRefreshToken(finalRefreshToken);
          }

          setIsAuthenticated(true);
        } catch {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [authType]);

  return { isChecking, isAuthenticated };
};
