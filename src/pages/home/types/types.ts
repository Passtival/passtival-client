import type { paths } from '@shared/apis/types/schema';

export type PerformanceList =
  paths['/api/festival/performances/closest']['get']['responses']['200']['content']['application/json'];

// swagger에 타입이 지정되지 않아 명시적으로 타입을 지정한 타입
export interface PerformanceListApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: PerformanceList;
}
