import axios from 'axios';

import {
  createHandleResponseError,
  handleRequest,
  handleResponse,
} from '@shared/apis/config/interceptor';
import { appConfig } from '@shared/configs/app-config';

export const api = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(handleRequest);
api.interceptors.response.use(handleResponse, createHandleResponseError(api));
