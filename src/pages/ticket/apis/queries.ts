import { mutationOptions } from '@tanstack/react-query';

import { END_POINT } from '@shared/apis/config/end-point';
import { api } from '@shared/apis/config/instance';

import type {
  MemberLevelUpRequest,
  MemberLevelUpResponse,
} from '../types/types';

export const setMemberLevelUp = async (
  data: MemberLevelUpRequest,
): Promise<MemberLevelUpResponse> => {
  const { data: response } = await api.patch<MemberLevelUpResponse>(
    END_POINT.MEMBER_LEVEL_UP,
    data,
  );
  return response;
};

export const TICKET_MUTATION_OPTIONS = {
  MEMBER_LEVEL_UP: () =>
    mutationOptions({
      mutationFn: setMemberLevelUp,
    }),
} as const;
