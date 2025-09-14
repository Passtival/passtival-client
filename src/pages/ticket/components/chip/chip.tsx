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
          const uiLevel = idx + 1; // UI에서는 1, 2, 3
          const serverLevel = idx; // 서버에서는 0, 1, 2
          const isDisabled = serverLevel !== completedLevel;

          return (
            <Chip
              key={uiLevel}
              label={levelLabel}
              selected={selectedLevel === uiLevel}
              onChange={() => !isDisabled && setSelectedLevel(uiLevel)}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    </>
  );
};

export default TicketChip;
