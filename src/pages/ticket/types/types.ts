import type { paths } from '@shared/apis/types/schema';

export type RafflePrizesResponse =
  paths['/api/raffle/prizes/{days}']['get']['responses']['200']['content']['*/*'];

export interface Prize {
  prizeId: number;
  prizeImagePath: string;
  prizeName: string;
}

export interface RafflePrizesResult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Prize[];
}
