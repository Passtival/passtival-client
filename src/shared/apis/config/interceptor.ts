import axios, {
  AxiosError,
  AxiosHeaders,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { routePath } from '@router/path';

import { authService } from '@shared/auth/services/auth-service';
import { tokenService } from '@shared/auth/services/token-service';
import { appConfig } from '@shared/configs/app-config';
import { HTTP_STATUS } from '@shared/constants/response';

/**
 * 토큰 재발급을 위한 API 엔드포인트 URL입니다.
 */
const REFRESH_ENDPOINT = `${appConfig.api.baseUrl}/api/auth/refresh`;

/**
 * 요청 전에 accessToken을 Authorization 헤더에 설정합니다.
 *
 * @param config - Axios 요청 설정 객체
 * @returns Authorization 헤더가 추가된 Axios 요청 설정 객체
 */
export const handleRequest = (config: InternalAxiosRequestConfig) => {
  const token = tokenService.getAccessToken();
  if (token) {
    if (!(config.headers instanceof AxiosHeaders)) {
      config.headers = new AxiosHeaders(config.headers);
    }
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
};

/**
 * 인증 실패 시 로그아웃 처리 후 로그인 페이지로 리다이렉트합니다.
 *
 * - 저장된 인증 정보를 제거합니다.
 * - '/login' 페이지로 강제 이동합니다.
 */
const redirectToLogin = (): void => {
  authService.logout();
  window.location.replace(routePath.LOGIN);
};

/**
 * 서버 응답을 처리합니다.
 *
 * @param response - 서버에서 반환된 Axios 응답 객체
 * @returns 응답 객체의 data 필드
 */
export const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

/**
 * 인증 실패(401 Unauthorized) 응답 시 토큰 재발급을 시도합니다.
 *
 * 동작 방식:
 * - 응답이 401이 아닌 경우 → 원래 에러를 반환합니다.
 * - 401이면서 refreshToken이 없는 경우 → 로그인 페이지로 리다이렉트합니다.
 * - refreshToken이 존재하는 경우:
 *   - 재발급 API에 요청을 보냅니다.
 *   - 성공 시 새 토큰을 저장하고 원래 요청을 재시도합니다.
 *   - 실패 시 로그인 페이지로 이동합니다.
 *
 * @param client - 재시도에 사용할 Axios 인스턴스
 * @returns 새로 갱신된 토큰으로 재시도한 요청 결과 또는 예외
 *
 * @throws 인증 실패 또는 재발급 요청 실패 시 예외를 반환합니다.
 */
export const createHandleResponseError =
  (client: AxiosInstance) => async (error: AxiosError) => {
    const { response, config } = error;
    const originalRequest = config as InternalAxiosRequestConfig & {
      retry?: boolean;
    };

    if (!response || response.status !== HTTP_STATUS.UNAUTHORIZED) {
      return Promise.reject(error);
    }

    if ((originalRequest.url ?? '').endsWith('/api/auth/refresh')) {
      redirectToLogin();
      return Promise.reject(error);
    }

    const refreshToken = tokenService.getRefreshToken();
    if (!refreshToken) {
      redirectToLogin();
      return Promise.reject(error);
    }

    if (originalRequest.retry) {
      redirectToLogin();
      return Promise.reject(error);
    }
    originalRequest.retry = true;

    try {
      const refreshResponse = await axios.post(REFRESH_ENDPOINT, null, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        refreshResponse.data.result;

      tokenService.saveAccessToken(newAccessToken);
      tokenService.saveRefreshToken(newRefreshToken);

      if (originalRequest.headers instanceof AxiosHeaders) {
        originalRequest.headers.set(
          'Authorization',
          `Bearer ${newAccessToken}`,
        );
      } else {
        originalRequest.headers = new AxiosHeaders(originalRequest.headers);
        originalRequest.headers.set(
          'Authorization',
          `Bearer ${newAccessToken}`,
        );
      }

      return client.request(originalRequest);
    } catch (error) {
      redirectToLogin();
      return Promise.reject(error);
    }
  };
