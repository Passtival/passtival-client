import type { paths } from '@shared/apis/types/schema';

export type BoothMenuResponse =
  paths['/api/festival/{boothId}/menus']['get']['responses']['200']['content']['application/json'];

export type BoothActivityResponse =
  paths['/api/festival/{boothId}/activities']['get']['responses']['200']['content']['application/json'];

export type BoothInfoResponse =
  paths['/api/festival/booths/{boothId}']['get']['responses']['200']['content']['application/json'];

// swagger에 타입이 지정되지 않아 명시적으로 타입을 지정한 타입
export interface BoothMenuApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothMenuResponse;
}

export interface BoothActivityApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothActivityResponse;
}

export interface BoothInfoApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: BoothInfoResponse;
}

export type BoothMenuItem = NonNullable<BoothMenuResponse>[number];
export type BoothActivityItem = NonNullable<BoothActivityResponse>[number];
export type BoothInfoItem = NonNullable<BoothInfoResponse>;
