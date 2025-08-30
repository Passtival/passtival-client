import { useState } from 'react';

import AgreementOption from '@shared/components/agreement-option/agreement-option.tsx';
import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './blind-match.css.ts';
import ConfirmModal from './components/modal/confirm-modal.tsx';
import UseInfoForm from './components/use-info-form/use-info-form';
import { BLIND_MATCH_TEXT } from './constants/blind-match-text';

const BlindMatch = () => {
  const [agreed, setAgreed] = useState(false);
  const [instaId, setInstaId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsentChange = (isAgreed: boolean) => {
    setAgreed(isAgreed);
  };

  const handleApplyClick = () => {
    if (name && instaId && phoneNumber && gender && agreed) {
      setIsModalOpen(true);
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
          <p className={styles.message}>{BLIND_MATCH_TEXT.MESSAGE}</p>
          <p className={styles.time}>{BLIND_MATCH_TEXT.TIME}</p>
        </div>

        <UseInfoForm
          name={name}
          instaId={instaId}
          phoneNumber={phoneNumber}
          gender={gender} // gender 상태 전달
          onNameChange={(e) => setName(e.target.value)}
          onInstaIdChange={(e) => setInstaId(e.target.value)}
          onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
          onGenderChange={(value) => setGender(value)}
        />

        <div className={styles.attention}>
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
      {isModalOpen && (
        <ConfirmModal
          instaId={instaId}
          phoneNumber={phoneNumber}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default BlindMatch;
