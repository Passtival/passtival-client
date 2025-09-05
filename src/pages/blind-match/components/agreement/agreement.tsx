import { routePath } from '@router/path';

import { BLIND_MATCH_TEXT } from '@pages/blind-match/constants/blind-match-text';

import AgreementOption from '@shared/components/agreement-option/agreement-option';

import * as styles from './agreement.css';

interface AgreementProps {
  checked: boolean;
  onChange: (isAgreed: boolean) => void;
}

const Agreement = ({ checked, onChange }: AgreementProps) => {
  return (
    <div className={styles.agreementoption}>
      <AgreementOption
        label={BLIND_MATCH_TEXT.CONSENT}
        navigateTo={routePath.INFO_SHARE_CONSENT}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
export default Agreement;
