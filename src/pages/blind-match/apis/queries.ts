//import { queryOptions } from '@tanstack/react-query';

import type { BlindMatchInfoStorage } from '@pages/blind-match/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
/*import { BLIND_MATCH_QUERY_KEY } from '@shared/apis/keys/query-key';

export const BLIND_MATCH_QUERY_OPTIONS = {
  BLIND_MATCH_INFO_STORAGE: () => {
    return queryOptions({
      queryKey: BLIND_MATCH_QUERY_KEY.BLIND_MATCH_PREVIEW(),
      queryFn: getBlindMatchInfoStorage,
    });
  },
};

export const getBlindMatchInfoStorage =
  async (): Promise<BlindMatchInfoStorage> => {
    const { data } = await api.get<BlindMatchInfoStorage>(
      END_POINT.BLIND_MATCH_INFO_STORAGE,
    );
    return data;
  };*/

export async function patchBlindMatchInfoStorage(body: {
  memberInstagramId: string;
  memberPhoneNumber: string;
  memberGender: 'FEMALE' | 'MALE'; // 서버 enum에 맞춰서
}): Promise<BlindMatchInfoStorage> {
  const { data } = await api.patch<BlindMatchInfoStorage>(
    END_POINT.BLIND_MATCH_INFO_STORAGE,
    body,
  );
  return data;
}
