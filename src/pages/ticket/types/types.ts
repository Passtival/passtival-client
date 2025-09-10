import type { paths } from '@shared/apis/types/schema';

export type RafflePrizesResponse =
  paths['/api/raffle/prizes/{days}']['get']['responses']['200']['content']['*/*'];
