import Chip from '@shared/components/chip/chip';

import * as styles from './chip.css';

const DAY = ['Lv. 1', 'Lv. 2', 'Lv. 3'];

interface TicketChipsProps {
  selectedLevel: number;
  setSelectedLevel: (day: number) => void;
  isLevel1Completed: boolean;
}

const TicketChip = ({
  selectedLevel,
  setSelectedLevel,
  isLevel1Completed,
}: TicketChipsProps) => {
  return (
    <>
      <div className={styles.container}>
        {DAY.map((levelLabel, idx) => {
          const dayNumber = idx + 1;
          const isDisabled = dayNumber > 1 && !isLevel1Completed;
          return (
            <Chip
              key={dayNumber}
              label={levelLabel}
              selected={selectedLevel === dayNumber}
              onChange={() => !isDisabled && setSelectedLevel(dayNumber)}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    </>
  );
};

export default TicketChip;
