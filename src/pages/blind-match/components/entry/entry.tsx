import { useState, useEffect } from 'react';

import Button from '@shared/components/button/button';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './entry.css.ts';
import { BLIND_MATCH_TEXT } from '../../constants/blind-match-text';
import Agreement from '../agreement/agreement.tsx';
import Message from '../message/message.tsx';
import ConfirmModal from '../modal/confirm-modal.tsx';
import EntryTitle from '../title/title.tsx';
import UseInfoForm from '../use-info-form/use-info-form';

interface MatchingForm {
  instaId: string;
  phoneNumber: string;
  gender: string;
}

interface EntryFormProps {
  currentDay: string;
  onApplicationComplete: () => void;
}

const EntryForm = ({ currentDay, onApplicationComplete }: EntryFormProps) => {
  const [form, setForm] = useState<MatchingForm>({
    instaId: '',
    phoneNumber: '',
    gender: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    const isValid = Boolean(
      form.phoneNumber &&
        form.gender &&
        agreed &&
        phoneRegex.test(form.phoneNumber),
    );
    setIsFormValid(isValid);
  }, [form, agreed]);

  const handleFormChange = (name: keyof MatchingForm, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleConsentChange = (isAgreed: boolean) => {
    setAgreed(isAgreed);
  };

  const handleApplyClick = () => {
    if (isFormValid) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    onApplicationComplete();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <EntryTitle />

      <Message currentDay={currentDay} />
      <div className={styles.container}>
        <UseInfoForm
          instaId={form.instaId}
          phoneNumber={form.phoneNumber}
          gender={form.gender}
          onInstaIdChange={(value) => handleFormChange('instaId', value)}
          onPhoneNumberChange={(value) =>
            handleFormChange('phoneNumber', value)
          }
          onGenderChange={(value) => handleFormChange('gender', value)}
        />

        <Agreement
          checked={agreed}
          onChange={handleConsentChange}
        />
        <Button
          onClick={handleApplyClick}
          disabled={!isFormValid}
        >
          번호팅 신청하기
        </Button>
        <div className={styles.notice}>
          <IcSvgCaution
            width={12}
            height={12}
          />
          {BLIND_MATCH_TEXT.NOTICE}
        </div>
        <ConfirmModal
          isModalOpen={isModalOpen}
          instaId={form.instaId}
          phoneNumber={form.phoneNumber}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      </div>
    </>
  );
};

export default EntryForm;
