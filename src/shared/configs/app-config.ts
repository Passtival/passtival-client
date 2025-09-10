import { routePath } from '@router/path';

/**
 * 애플리케이션 전체 설정을 관리하는 Config 파일
 */
const DEFAULT_CONFIG = {
  auth: {
    isEnabled: true, // 인증 기능 활성화 여부
    loginSuccessUrl: routePath.HOME,
    loginFailureUrl: routePath.LOGIN,
  },
  adminAuth: {
    isEnabled: true,
    loginSuccessUrl: routePath.ADMIN_MAIN,
    loginFailureUrl: routePath.ADMIN_LOGIN,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  },
};

export const appConfig = {
  ...DEFAULT_CONFIG,
};
