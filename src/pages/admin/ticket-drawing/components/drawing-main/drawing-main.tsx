import { useState } from 'react';

import Button from '@shared/components/button/button';

import Drawing from '../drawing/drawing';
import DrawingModal from '../modal';
import * as styles from './drawing-main.css';

interface DrawingMainProps {
  currentDay: string;
}

const DrawingMain = ({ currentDay }: DrawingMainProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewState, setViewState] = useState<'initial' | 'result'>('initial');

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
    return <Drawing />;
  }

  return (
    <>
      <p className={styles.text}>응모권 추첨</p>
      <div className={styles.container}>
        <Button onClick={handleOpenModal}>응모권 추첨</Button>

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
