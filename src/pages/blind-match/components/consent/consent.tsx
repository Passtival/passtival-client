import { useState } from 'react';

import { BLIND_MATCH_TEXT } from '@pages/blind-match/constants/blind-match-text';

import AgreementOption from '@shared/components/agreement-option/agreement-option';

import * as styles from './consent.css';

const Consent = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (CheckState: boolean) => {
    setAgreed(CheckState);
  };

  return (
    <div className={styles.container}>
      <AgreementOption
        label={BLIND_MATCH_TEXT.CONSENT}
        checked={agreed}
        onChange={handleAgreementChange}
        navigateTo=""
      />
    </div>
  );
};

export default Consent;
