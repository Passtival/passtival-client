import type { paths } from '@shared/apis/types/schema';

export type BlindMatchInfoStorage =
  paths['/api/matching/me']['get']['responses']['200']['content']['*/*'];
