import { BLIND_MATCH_TEXT } from '@pages/blind-match/constants/blind-match-text';

import * as styles from './message.css';

interface MessageProps {
  currentDay: string;
}

const Message = ({ currentDay }: MessageProps) => {
  return (
    <div className={styles.textcontainer}>
      <p className={styles.message}>
        {currentDay}
        {BLIND_MATCH_TEXT.MESSAGE}
      </p>
      <p className={styles.time}>{BLIND_MATCH_TEXT.TIME}</p>
    </div>
  );
};
export default Message;
