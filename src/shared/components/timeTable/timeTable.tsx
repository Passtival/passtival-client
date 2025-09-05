import { OPENING_HOURS } from '@shared/constants/festivalSchedule';
import { IcSvgClock } from '@shared/icons';
import { themeVars } from '@shared/styles';
import { getOpeningHours } from '@shared/utils/getOpeningHours';

import * as styles from './timeTable.css';
import Card from '../card/card';

interface TimeTableProps {
  startIso: string;
  endIso: string;
  title: string;
  assignee?: string;
  description: string;
  alt?: string;
  onClick: () => void;
  imgSrc: string;
  imgAlt?: string;
}

const TimeTable = ({
  startIso,
  endIso,
  title,
  assignee,
  description,
  onClick,
  imgSrc,
  imgAlt,
}: TimeTableProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <IcSvgClock
          width="0.9rem"
          height="0.9rem"
          color={themeVars.color.main_yellow}
        />
        <p className={styles.text}>
          {OPENING_HOURS} {getOpeningHours(startIso)} ~{' '}
          {getOpeningHours(endIso)}
        </p>
      </div>
      <div className={styles.bottom}>
        <Card
          title={title}
          assignee={assignee}
          description={description}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          type="sm"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
export default TimeTable;
