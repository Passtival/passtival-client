import { useState, useEffect } from 'react';

import Loading from '@shared/components/loading/loading';
import Title from '@shared/components/title/title';

import * as styles from './drawing.css';
import type { WinnerData } from '../../types/winner-data';
import InfoSection from '../info-section/info-section';

interface DrawingProps {
  winners: WinnerData[];
  isLoading: boolean;
  onReExecuteRaffle: () => void;
  onExecuteSecondRaffle: () => void;
}

const Drawing = ({
  winners,
  isLoading,
  onReExecuteRaffle,
  onExecuteSecondRaffle,
}: DrawingProps) => {
  const [displayWinners, setDisplayWinners] = useState<WinnerData[]>([]);

  useEffect(() => {
    if (winners.length > 0) {
      setDisplayWinners(winners);
    }
  }, [winners]);

  return (
    <>
      <div className={styles.title}>
        <Title
          mainTitle="당첨자 추첨"
          subTitle="응모권 당첨자 페이지입니다."
        />
      </div>

      {isLoading ? (
        <Loading
          size="medium"
          message="추첨 중입니다..."
        />
      ) : (
        <>
          {/* 당첨자 1 - 항상 렌더링 */}
          <div className={styles.container}>
            <p className={styles.text}>당첨자 1</p>
            <InfoSection
              value={displayWinners[0]?.name || ''}
              studentnumber={displayWinners[0]?.studentId || ''}
              handleButtonClick={onReExecuteRaffle}
            />
          </div>

          {/* 당첨자 2 - 당첨자 1이 있을 때만 렌더링 */}
          {displayWinners.length > 0 && (
            <div className={styles.container}>
              <p className={styles.text}>당첨자 2</p>
              <InfoSection
                value={displayWinners[1]?.name || ''}
                studentnumber={displayWinners[1]?.studentId || ''}
                handleButtonClick={onExecuteSecondRaffle}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Drawing;
