import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useCallback, useEffect } from 'react';

import { TICKET_MUTATION_OPTIONS, TICKET_QUERY_OPTIONS } from '../apis/queries';

interface TicketForm {
  name: string;
  studentNum: string;
  key: string;
}

type ModalType = 'confirm' | 'success' | 'error' | 'premium' | null;

export const useTicketForm = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState<TicketForm>({
    name: '',
    studentNum: '',
    key: '',
  });

  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [completedLevel, setCompletedLevel] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  // 사용자 응모권 정보 조회
  const { data: memberRaffleProfile } = useQuery(
    TICKET_QUERY_OPTIONS.MEMBER_RAFFLE_PROFILE(),
  );

  const levelUpMutation = useMutation(
    TICKET_MUTATION_OPTIONS.MEMBER_LEVEL_UP(),
  );

  const isErrorState = modalType === 'error';

  // 사용자 레벨 정보를 기반으로 초기 상태 설정
  useEffect(() => {
    if (memberRaffleProfile?.result) {
      const currentLevel = memberRaffleProfile.result.level || 0;
      setCompletedLevel(currentLevel);

      const nextLevel = Math.min(currentLevel + 1, 3);
      setSelectedLevel(nextLevel);
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
      await levelUpMutation.mutateAsync({
        name: form.name,
        studentId: form.studentNum,
        authenticationKey: form.key,
        level: selectedLevel,
      });

      queryClient.invalidateQueries({
        queryKey: ['member', 'raffle', 'profile'],
      });

      setModalType('success');
      setCompletedLevel(selectedLevel);
    } catch (error) {
      console.error('Level up failed:', error);
      setModalType('error');
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
