import { BLIND_MATCH_TEXT } from '@pages/blind-match/constants/blind-match-text';

import Title from '@shared/components/title/title';

import * as styles from './title.css';

const EntryTitle = () => {
  return (
    <div className={styles.title}>
      <Title
        mainTitle={BLIND_MATCH_TEXT.TITLE}
        subTitle={BLIND_MATCH_TEXT.SUBTITLE}
      />
    </div>
  );
};
export default EntryTitle;
