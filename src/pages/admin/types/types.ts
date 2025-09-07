import type { paths } from '@shared/apis/types/schema';

export type AdminLoginResponse =
  paths['/api/admin/login']['post']['responses']['200']['content']['*/*'];

export type AdminLoginRequest =
  paths['/api/admin/login']['post']['requestBody']['content']['application/json'];
