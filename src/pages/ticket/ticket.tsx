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
    'confirm' | 'success' | 'error' | null
  >(null);

  const [selectedLevel, setSelectedLevel] = useState(1);
  const isErrorState = modalType === 'error';
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);
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
    if (!form.name || !form.studentNum || !form.key) {
      setModalType('error');
      return;
    }
    setModalType('confirm');
  }, [form]);

  const handleConfirm = useCallback(() => {
    setModalType('success');
    if (selectedLevel === 1) {
      setIsLevel1Completed(true);
    }
  }, [selectedLevel]);

  const handleCloseModal = useCallback(() => {
    setModalType(null);
    if (modalType === 'success') {
      setForm({
        name: '',
        studentNum: '',
        key: '',
      });
      if (isLevel1Completed) {
        setSelectedLevel(2);
      }
    }
  }, [modalType, isLevel1Completed]);

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
          isLevel1Completed={isLevel1Completed}
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
