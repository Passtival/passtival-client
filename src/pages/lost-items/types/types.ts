import type { paths } from '@shared/apis/types/schema';

export type LostItemResponse =
  paths['/api/found-items']['get']['responses']['200']['content']['*/*'];
