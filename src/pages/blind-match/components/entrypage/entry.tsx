import { useState } from 'react';

import AgreementOption from '@shared/components/agreement-option/agreement-option.tsx';
import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './entry.css.ts';
import { BLIND_MATCH_TEXT } from '../../constants/blind-match-text';
import ConfirmModal from '../modal/confirm-modal.tsx';
import UseInfoForm from '../use-info-form/use-info-form';

interface EntryPageProps {
  currentDay: string;
}

const EntryPage = ({ currentDay }: EntryPageProps) => {
  const [agreed, setAgreed] = useState(false);
  const [instaId, setInstaId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleConsentChange = (isAgreed: boolean) => {
    setAgreed(isAgreed);
    setHasError(false);
  };

  const handleApplyClick = () => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (instaId && phoneNumber && gender && agreed) {
      if (phoneRegex.test(phoneNumber)) {
        setHasError(false);
        setIsModalOpen(true);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={styles.title}>
        <Title
          mainTitle={BLIND_MATCH_TEXT.TITLE}
          subTitle={BLIND_MATCH_TEXT.SUBTITLE}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.textcontainer}>
          <p className={styles.message}>
            {currentDay}
            {BLIND_MATCH_TEXT.MESSAGE}
          </p>
          <p className={styles.time}>{BLIND_MATCH_TEXT.TIME}</p>
        </div>

        <UseInfoForm
          instaId={instaId}
          phoneNumber={phoneNumber}
          gender={gender}
          onInstaIdChange={(value) => {
            setInstaId(value);
            setHasError(false);
          }}
          onPhoneNumberChange={(value) => {
            setPhoneNumber(value);
            setHasError(false);
          }}
          onGenderChange={(value) => {
            setGender(value);
            setHasError(false);
          }}
        />

        <div
          className={
            hasError ? `${styles.attention} ${styles.error}` : styles.attention
          }
        >
          <IcSvgCaution
            width={12}
            height={12}
          />
          {BLIND_MATCH_TEXT.ATTENTION}
        </div>

        <div className={styles.agreementoption}>
          <AgreementOption
            label={BLIND_MATCH_TEXT.CONSENT}
            navigateTo=""
            checked={agreed}
            onChange={handleConsentChange}
          />
        </div>

        <Button onClick={handleApplyClick}>번호팅 신청하기</Button>

        <div className={styles.notice}>
          <IcSvgCaution
            width={12}
            height={12}
          />
          {BLIND_MATCH_TEXT.NOTICE}
        </div>
      </div>
      <ConfirmModal
        isModalOpen={isModalOpen}
        instaId={instaId}
        phoneNumber={phoneNumber}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default EntryPage;
