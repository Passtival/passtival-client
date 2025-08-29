import Button from '@shared/components/button/button';
import Title from '@shared/components/title/title';
import { IcSvgCaution } from '@shared/icons';

import * as styles from './blind-match.css.ts';
import Consent from './components/consent/consent';
import UseInfoForm from './components/use-info-form/use-info-form';
import { BLIND_MATCH_TEXT } from './constants/blind-match-text';

const BlindMatch = () => {
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
        <UseInfoForm />
        <div className={styles.attention}>
          <IcSvgCaution
            width={12}
            height={12}
          />
          {BLIND_MATCH_TEXT.ATTENTION}
        </div>
        <Consent />
        <Button onClick={() => {}}>번호팅 신청하기</Button>

        <div className={styles.notice}>
          <IcSvgCaution
            width={12}
            height={12}
          />
          {BLIND_MATCH_TEXT.NOTICE}
        </div>
      </div>
    </>
  );
};

export default BlindMatch;
