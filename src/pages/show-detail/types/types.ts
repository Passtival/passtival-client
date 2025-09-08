import type { paths } from '@shared/apis/types/schema';

export type ShowDetailResponse =
  paths['/api/festival/performances/{performanceId}']['get']['responses']['200']['content']['*/*'];
