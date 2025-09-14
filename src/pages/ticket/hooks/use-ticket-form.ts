import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useCallback, useEffect } from 'react';

import {
  TICKET_MUTATION_OPTIONS,
  TICKET_QUERY_OPTIONS,
  getMemberRaffleProfile,
} from '../apis/queries';

interface TicketForm {
  name: string;
  studentNum: string;
  key: string;
}

type ModalType =
  | 'confirm'
  | 'success'
  | 'error'
  | 'premium'
  | 'auth_error'
  | null;

export const useTicketForm = () => {
  const queryClient = useQueryClient();

  const initialCompletedLevel =
    Number(localStorage.getItem('completedLevel')) || 0;
  const [completedLevel, setCompletedLevel] = useState(initialCompletedLevel);

  const [form, setForm] = useState<TicketForm>({
    name: '',
    studentNum: '',
    key: '',
  });

  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  const { data: memberRaffleProfile } = useQuery(
    TICKET_QUERY_OPTIONS.MEMBER_RAFFLE_PROFILE(),
  );

  const levelUpMutation = useMutation(
    TICKET_MUTATION_OPTIONS.MEMBER_LEVEL_UP(),
  );

  const isErrorState = modalType === 'error' || modalType === 'auth_error';

  useEffect(() => {
    if (memberRaffleProfile?.result) {
      const serverLevel = memberRaffleProfile.result.level || 0;
      setCompletedLevel(serverLevel);

      // 다음에 응모할 수 있는 레벨 설정 (서버 level + 1)
      const nextUiLevel = Math.min(serverLevel + 1, 3);
      setSelectedLevel(nextUiLevel);
    }
  }, [memberRaffleProfile]);

  useEffect(() => {
    const isValid =
      form.name.trim() !== '' &&
      form.studentNum.trim() !== '' &&
      form.key.trim() !== '';
    setIsFormValid(isValid);
  }, [form]);

  const handleFormChange = useCallback(
    (name: keyof TicketForm, value: string) => {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    },
    [],
  );

  const handleApplyClick = useCallback(() => {
    if (selectedLevel === 3) {
      setModalType('premium');
    } else {
      setModalType('confirm');
    }
  }, [selectedLevel]);

  const handleConfirm = useCallback(async () => {
    try {
      // UI level을 서버 level로 변환 (UI level과 동일)
      const serverLevel = selectedLevel;

      const response = await levelUpMutation.mutateAsync({
        name: form.name,
        studentId: form.studentNum,
        authenticationKey: form.key,
        level: serverLevel,
      });

      // 서버 응답이 실패인 경우 에러 처리
      if (!response?.isSuccess) {
        throw new Error(response?.message || '응모에 실패했습니다.');
      }

      // Lv.3 응모 시 자동으로 Lv.4도 응모
      if (selectedLevel === 3) {
        await levelUpMutation.mutateAsync({
          name: form.name,
          studentId: form.studentNum,
          authenticationKey: form.key,
          level: 4, // Lv.4
        });
      }

      // 서버에서 새로운 레벨 정보를 가져옴
      const updatedProfile = await queryClient.fetchQuery({
        queryKey: ['member', 'raffle', 'profile'],
        queryFn: getMemberRaffleProfile,
      });

      // 서버에서 가져온 새로운 레벨로 상태 업데이트
      if (updatedProfile?.result) {
        const newServerLevel = updatedProfile.result.level || 0;
        setCompletedLevel(newServerLevel);

        // 다음에 응모할 수 있는 레벨 설정 (서버 level + 1)
        const nextUiLevel = Math.min(newServerLevel + 1, 3);
        setSelectedLevel(nextUiLevel);
      }

      setModalType('success');
    } catch (error) {
      console.error('Level up failed:', error);

      // 서버 에러 메시지 확인
      let errorMessage = '';

      if (error && typeof error === 'object') {
        if (
          'response' in error &&
          error.response &&
          typeof error.response === 'object'
        ) {
          const response = error.response as { data?: { message?: string } };
          errorMessage = response.data?.message || '';
        } else if ('message' in error && typeof error.message === 'string') {
          errorMessage = error.message;
        }
      }

      // 인증키 관련 에러인지 확인
      if (
        errorMessage.includes('인증키') ||
        errorMessage.includes('authentication') ||
        errorMessage.includes('key') ||
        errorMessage.includes('인증')
      ) {
        setModalType('auth_error');
      } else {
        setModalType('error');
      }
    }
  }, [selectedLevel, form, levelUpMutation, queryClient]);

  const handleCloseModal = useCallback(() => {
    setModalType(null);
    if (modalType === 'success') {
      setForm({
        name: '',
        studentNum: '',
        key: '',
      });
    }
  }, [modalType]);

  return {
    form,
    modalType,
    selectedLevel,
    completedLevel,
    isFormValid,
    isErrorState,
    isLoading: levelUpMutation.isPending,

    handleFormChange,
    handleApplyClick,
    handleConfirm,
    handleCloseModal,
    setSelectedLevel,
  };
};
