import type { paths } from '@shared/apis/types/schema';

export type BoothCursorResponse =
  paths['/api/festival/booths/cursor']['get']['responses']['200']['content']['application/json'];

export interface BoothCursorResult {
  content: Array<{
    id: number;
    name: string;
    type: string;
    department: string;
    info: string;
    imagePath: string;
  }>;
  nextCursor?: number;
}

export interface BoothCursorApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: BoothCursorResult;
}
