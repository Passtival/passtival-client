import type { paths } from '@shared/apis/types/schema';

export type MemberLevelUpRequest =
  paths['/api/member/level-up']['patch']['requestBody']['content']['application/json'];

export type MemberLevelUpResponse =
  paths['/api/member/level-up']['patch']['responses']['200']['content']['*/*'];
export type RafflePrizesResponse =
  paths['/api/raffle/prizes/{days}']['get']['responses']['200']['content']['*/*'];

export type MemberRaffleProfileResponse =
  paths['/api/raffle/member']['get']['responses']['200']['content']['*/*'];
