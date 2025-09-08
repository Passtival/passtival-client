import type { paths } from '@shared/apis/types/schema';

export type RaffleWinnersResponse =
  paths['/api/admin/raffle/{day}']['get']['responses']['200']['content']['*/*'];

export type RaffleExecuteResponse =
  paths['/api/admin/raffle/{day}']['post']['responses']['200']['content']['*/*'];

export type PremiumWinnersResponse =
  paths['/api/admin/raffle/premium']['get']['responses']['200']['content']['*/*'];

export type PremiumExecuteResponse =
  paths['/api/admin/raffle/premium']['post']['responses']['200']['content']['*/*'];
