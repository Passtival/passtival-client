import type { paths } from '@shared/apis/types/schema';

export type BoothMenuResponse =
  paths['/api/festival/{boothId}/menus']['get']['responses']['200']['content']['application/json'];

// swagger에 타입이 지정되지 않아 명시적으로 타입을 지정한 타입
export interface BoothMenuApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothMenuResponse;
}

export type BoothMenuItem = NonNullable<BoothMenuResponse>[number];
