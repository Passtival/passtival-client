import Chip from '@shared/components/chip/chip';

import * as styles from './chip.css';

const DAY = ['Lv. 1', 'Lv. 2', 'Lv. 3'];

interface TicketChipsProps {
  selectedLevel: number;
  setSelectedLevel: (day: number) => void;
  completedLevel: number;
}

const TicketChip = ({
  selectedLevel,
  setSelectedLevel,
  completedLevel,
}: TicketChipsProps) => {
  return (
    <>
      <div className={styles.container}>
        {DAY.map((levelLabel, idx) => {
          const dayNumber = idx + 1;
          const isDisabled = dayNumber > completedLevel + 1;
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
