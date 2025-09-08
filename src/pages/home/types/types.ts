import type { paths } from '@shared/apis/types/schema';

export type PerformanceList =
  paths['/api/festival/performances']['get']['responses']['200']['content']['*/*'];
