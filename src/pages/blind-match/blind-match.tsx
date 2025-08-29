import Title from '@shared/components/title/title';

import Consent from './components/consent/consent';
import UseInfoForm from './components/use-info-form/use-info-form';
import { BLIND_MATCH_TEXT } from './constants/blind-match-text';

const BlindMatch = () => {
  return (
    <>
      <Title
        mainTitle={BLIND_MATCH_TEXT.TITLE}
        subTitle={BLIND_MATCH_TEXT.SUBTITLE}
      />
      <p>{BLIND_MATCH_TEXT.MESSAGE}</p>
      <p>{BLIND_MATCH_TEXT.TIME}</p>

      <UseInfoForm />
      <Consent />
    </>
  );
};

export default BlindMatch;
