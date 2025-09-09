import { queryOptions, mutationOptions } from '@tanstack/react-query';

import type {
  BlindMatchInfoStorage,
  BlindMatchApply,
  BlindMatchResult,
} from '@pages/blind-match/types/types';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';
import { BLIND_MATCH_QUERY_KEY } from '@shared/apis/keys/query-key';

export const BLIND_MATCH_QUERY_OPTIONS = {
  BLIND_MATCH_RESULT: () => {
    return queryOptions({
      queryKey: [...BLIND_MATCH_QUERY_KEY.ALL, 'result'],
      queryFn: getBlindMatchResult,
    });
  },
  BLIND_MATCH_INFO_STORAGE: () => {
    return queryOptions({
      queryKey: BLIND_MATCH_QUERY_KEY.BLIND_MATCH_PREVIEW(),
      queryFn: getBlindMatchMyInfo,
    });
  },
};

export const BLIND_MATCH_MUTATION_OPTIONS = {
  POST_BLIND_MATCH_INFO: () =>
    mutationOptions({ mutationFn: postBlindMatchMyInfo }),

  PATCH_BLIND_MATCH_INFO: () =>
    mutationOptions({ mutationFn: patchBlindMatchInfoStorage }),

  POST_BLIND_MATCH_APPLY: () =>
    mutationOptions({ mutationFn: postBlindMatchApply }),
};

export const getBlindMatchMyInfo = async (): Promise<BlindMatchInfoStorage> => {
  const { data } = await api.get<BlindMatchInfoStorage>(
    END_POINT.BLIND_MATCH_INFO_STORAGE,
  );
  return data;
};

export async function postBlindMatchMyInfo(): Promise<BlindMatchInfoStorage> {
  const { data } = await api.post<BlindMatchInfoStorage>(
    END_POINT.BLIND_MATCH_INFO_STORAGE,
  );
  return data;
}

export async function postBlindMatchApply(): Promise<BlindMatchApply> {
  const { data } = await api.post<BlindMatchApply>(END_POINT.BLIND_MATCH_APPLY);
  return data;
}

export const getBlindMatchResult = async (): Promise<BlindMatchResult> => {
  const { data } = await api.get<BlindMatchResult>(
    END_POINT.BLIND_MATCH_RESULT,
  );
  return data;
};

export async function patchBlindMatchInfoStorage(body: {
  instagramId: string;
  phoneNumber: string;
  gender: 'FEMALE' | 'MALE';
}) {
  const { data } = await api.patch(END_POINT.BLIND_MATCH_INFO_STORAGE, body);
  return data;
}
