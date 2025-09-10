import type { paths } from '@shared/apis/types/schema';

export type BlindMatchInfoStorage =
  paths['/api/matching/me']['get']['responses']['200']['content']['*/*'];

export type BlindMatchApply =
  paths['/api/matching']['post']['responses']['200']['content']['*/*'];

export type BlindMatchResult =
  paths['/api/matching/result']['get']['responses']['200']['content']['*/*'];
