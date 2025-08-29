import { useState } from 'react';

import { BLIND_MATCH_TEXT } from '@pages/blind-match/constants/blind-match-text';

import AgreementOption from '@shared/components/agreement-option/agreement-option';

const Consent = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (CheckState: boolean) => {
    setAgreed(CheckState);
  };

  return (
    <div>
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
