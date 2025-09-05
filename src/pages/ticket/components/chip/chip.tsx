import Chip from '@shared/components/chip/chip';

import * as styles from './chip.css';

const DAY = ['Lv. 1', 'Lv. 2', 'Lv. 3'];

interface TicketChipsProps {
  selectedLevel: number;
  setSelectedLevel: (day: number) => void;
}

const TicketChip = ({ selectedLevel, setSelectedLevel }: TicketChipsProps) => {
  return (
    <>
      <div className={styles.container}>
        {DAY.map((levelLabel, idx) => {
          const dayNumber = idx + 1;
          return (
            <Chip
              key={dayNumber}
              label={levelLabel}
              selected={selectedLevel === dayNumber}
              onChange={() => setSelectedLevel(dayNumber)}
            />
          );
        })}
      </div>
    </>
  );
};

export default TicketChip;
