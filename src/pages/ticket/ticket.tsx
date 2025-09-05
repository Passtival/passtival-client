import { useState, useCallback, useEffect } from 'react';

import InputSection from '@pages/ticket/components/inpur-section/input-section';

import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';

import Caption from './components/caption/caption';
import TicketCarousel from './components/carousel/carousel';
import TicketChip from './components/chip/chip';
import TicketModal from './components/ticketmodal';
import * as styles from './ticket.css';

interface TicketForm {
  name: string;
  studentNum: string;
  key: string;
}

const Ticket = () => {
  const [form, setForm] = useState<TicketForm>({
    name: '',
    studentNum: '',
    key: '',
  });

  const [modalType, setModalType] = useState<
    'confirm' | 'success' | 'error' | 'premium' | null
  >(null);

  const [selectedLevel, setSelectedLevel] = useState(1);
  const isErrorState = modalType === 'error';
  const [completedLevel, setCompletedLevel] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      form.name.trim() !== '' &&
      form.studentNum.trim() !== '' &&
      form.key.trim() !== '';
    setIsFormValid(isValid);
  }, [form]);

  const handleFormChange = (name: keyof TicketForm, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleApplyClick = useCallback(() => {
    if (selectedLevel === 3) {
      setModalType('premium');
    } else {
      setModalType('confirm');
    }
  }, [isFormValid, selectedLevel]);

  const handleConfirm = useCallback(() => {
    setModalType('success');
    setCompletedLevel(selectedLevel);
  }, [selectedLevel]);

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

  return (
    <>
      <div className={styles.container}>
        <Title
          mainTitle="상품 응모권"
          subTitle="상품 당첨의 기회를 잡아보세요!"
        />
        <TicketCarousel />
        <TicketChip
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          completedLevel={completedLevel}
        />
        <InputSection
          name={form.name}
          studentNum={form.studentNum}
          accessKey={form.key}
          isErrorState={isErrorState}
          onNameChange={(value) => handleFormChange('name', value)}
          onStudentNumberChange={(value) =>
            handleFormChange('studentNum', value)
          }
          onKeyChange={(value) => handleFormChange('key', value)}
        />
        <Button
          onClick={handleApplyClick}
          disabled={!isFormValid}
        >
          응모하기
        </Button>
        <Caption />
        <TicketModal
          modalType={modalType}
          name={form.name}
          studentNumber={form.studentNum}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      </div>
    </>
  );
};

export default Ticket;
