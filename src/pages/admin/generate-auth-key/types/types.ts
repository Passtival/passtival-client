import type { paths } from '@shared/apis/types/schema';

export type AdminRaffleAuthKeyResponse =
  paths['/api/admin/raffle/authentication-key']['get']['responses']['200']['content']['*/*'];

export type AdminRaffleAuthKeyLevelRequest =
  paths['/api/admin/raffle/authentication-key']['patch']['requestBody']['content']['application/json'];

export type AdminRaffleAuthKeyLevelResponse =
  paths['/api/admin/raffle/authentication-key']['patch']['responses']['200']['content']['*/*'];

export type MemberLevelUpRequest =
  paths['/api/member/level-up']['patch']['requestBody']['content']['application/json'];

export type MemberLevelUpResponse =
  paths['/api/member/level-up']['patch']['responses']['200']['content']['*/*'];
