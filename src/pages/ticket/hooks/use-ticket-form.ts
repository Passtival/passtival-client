import { useMutation } from '@tanstack/react-query';
import { useState, useCallback, useEffect } from 'react';

import { TICKET_MUTATION_OPTIONS } from '../apis/queries';

interface TicketForm {
  name: string;
  studentNum: string;
  key: string;
}

type ModalType = 'confirm' | 'success' | 'error' | 'premium' | null;

export const useTicketForm = () => {
  const [form, setForm] = useState<TicketForm>({
    name: '',
    studentNum: '',
    key: '',
  });

  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [completedLevel, setCompletedLevel] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const levelUpMutation = useMutation(
    TICKET_MUTATION_OPTIONS.MEMBER_LEVEL_UP(),
  );

  const isErrorState = modalType === 'error';

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

      setModalType('success');
      setCompletedLevel(selectedLevel);
    } catch (error) {
      console.error('Level up failed:', error);
      setModalType('error');
    }
  }, [selectedLevel, form, levelUpMutation]);

  const handleCloseModal = useCallback(() => {
    setModalType(null);
    if (modalType === 'success') {
      setForm({
        name: '',
        studentNum: '',
        key: '',
      });
      if (selectedLevel < 3) {
        setSelectedLevel(selectedLevel + 1);
      }
    }
  }, [modalType, selectedLevel]);

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
