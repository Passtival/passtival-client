import { api } from './config/instance';

export function get<T>(...args: Parameters<typeof api.get>) {
  return api.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof api.post>) {
  return api.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof api.put>) {
  return api.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof api.patch>) {
  return api.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof api.delete>) {
  return api.delete<T>(...args);
}
