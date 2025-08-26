import { OPENING_HOURS } from '@shared/constants/festivalSchedule';
import { IcSvgClock } from '@shared/icons';
import { themeVars } from '@shared/styles';
import { GetTime } from '@shared/utils/getTime';

import * as styles from './timeTable.css';
import Card from '../card/card';

const TimeTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <IcSvgClock
          width="0.9rem"
          height="0.9rem"
          color={themeVars.color.main_blue}
        />
        <p className={styles.text}>
          {OPENING_HOURS}: {GetTime('')} ~ {GetTime('')}
        </p>
      </div>
      <div className={styles.bottom}>
        <Card
          title="어쩌구"
          assignee="컴공"
          description="#저쩌구"
          imgSrc="https://placehold.co/600x400"
          imgAlt="이미지"
          type={'sm'}
        />
      </div>
    </div>
  );
};
export default TimeTable;
