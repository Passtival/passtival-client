import axios from 'axios';

import { appConfig } from '@shared/configs/app-config';

import {
  createHandleResponseError,
  handleRequest,
  handleResponse,
  createHandleAdminRequest,
  createHandleAdminResponseError,
} from './interceptor';

export const api = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adminApi = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 일반 사용자용 인터셉터
api.interceptors.request.use(handleRequest);
api.interceptors.response.use(handleResponse, createHandleResponseError(api));

// 관리자용 인터셉터
adminApi.interceptors.request.use(createHandleAdminRequest());
adminApi.interceptors.response.use(
  handleResponse,
  createHandleAdminResponseError(),
);
