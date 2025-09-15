import Loading from '@shared/components/loading/loading';
import Title from '@shared/components/title/title';

import * as styles from './drawing.css';
import type { WinnerData } from '../../types/winner-data';
import InfoSection from '../info-section/info-section';

interface DrawingProps {
  winner: WinnerData | null;
  isLoading: boolean;
  onReExecuteRaffle: () => void;
}

const Drawing = ({ winner, isLoading, onReExecuteRaffle }: DrawingProps) => {
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
          <div className={styles.container}>
            <p className={styles.text}>당첨자</p>
            <InfoSection
              value={winner?.name || ''}
              studentnumber={winner?.studentId || ''}
              handleButtonClick={onReExecuteRaffle}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Drawing;
