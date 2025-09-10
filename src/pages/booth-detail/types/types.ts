import type { paths } from '@shared/apis/types/schema';

export type BoothMenuResponse =
  paths['/api/festival/{boothId}/menus']['get']['responses']['200']['content']['*/*'];

export type BoothMenuItem = NonNullable<BoothMenuResponse['result']>[number] & {
  id: number;
};
