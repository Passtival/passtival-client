import type { paths } from '@shared/apis/types/schema';

export type PerformanceList =
  paths['/api/festival/performances/closest']['get']['responses']['200']['content']['*/*'];
