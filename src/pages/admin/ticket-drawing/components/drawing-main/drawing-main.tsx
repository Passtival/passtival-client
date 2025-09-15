import { useState, useEffect } from 'react';

import type { WinnerData } from '@pages/admin/ticket-drawing/types/winner-data';

import Button from '@shared/components/button/button';
import Loading from '@shared/components/loading/loading';

import Drawing from '../drawing/drawing';
import DrawingModal from '../modal';
import * as styles from './drawing-main.css';

interface DrawingMainProps {
  currentDay: string;
  onExecuteRaffle: () => void;
  winner: WinnerData | null;
  isLoading: boolean;
}

const DrawingMain = ({
  currentDay,
  onExecuteRaffle,
  winner,
  isLoading,
}: DrawingMainProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewState, setViewState] = useState<'initial' | 'result'>('initial');

  useEffect(() => {
    if (winner) {
      setViewState('result');
    }
  }, [winner]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = () => {
    setIsModalOpen(false);
    setViewState('result');
  };

  if (viewState === 'result') {
    return (
      <Drawing
        winner={winner}
        isLoading={isLoading}
        onReExecuteRaffle={onExecuteRaffle}
      />
    );
  }

  if (isLoading) {
    return (
      <Loading
        size="medium"
        message="추첨 중입니다..."
      />
    );
  }

  return (
    <>
      <p className={styles.text}>응모권 추첨</p>
      <div className={styles.container}>
        <Button
          onClick={handleOpenModal}
          disabled={isLoading}
        >
          응모권 추첨
        </Button>

        <DrawingModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          onCheck={handleCheck}
          currentDay={currentDay}
        />
      </div>
    </>
  );
};

export default DrawingMain;
