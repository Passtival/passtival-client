import axios, { AxiosError } from 'axios';

import { routePath } from 'src/router/path';

import type { responseTypes } from '@shared/apis/types/api';
import { HTTP_STATUS, RESPONSE_MESSAGE } from '@shared/constants/response';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// TODO: interceptor 추후 수정 필요
api.interceptors.response.use(
  (response) => {
    // TODO: 명세서 보고 바꾸기
    // response.data: { status, message, data }
    return response.data.data;
  },
  (error: AxiosError) => {
    const statusCode = error.response?.status;

    if (statusCode === HTTP_STATUS.UNAUTHORIZED) {
      window.location.replace(routePath.LOGIN);
    }

    if (error.response) {
      const { status, message } = error.response.data as responseTypes;
      const displayMessage =
        RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';
      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  },
);
