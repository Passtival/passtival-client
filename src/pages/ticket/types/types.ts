import type { paths } from '@shared/apis/types/schema';

export type MemberLevelUpRequest =
  paths['/api/member/level-up']['patch']['requestBody']['content']['application/json'];

export type MemberLevelUpResponse =
  paths['/api/member/level-up']['patch']['responses']['200']['content']['*/*'];
