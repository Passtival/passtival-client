import type { paths } from '@shared/apis/types/schema';

export type BoothMenuResponse =
  paths['/api/festival/booths/{boothId}']['get']['responses']['200']['content']['*/*'];
