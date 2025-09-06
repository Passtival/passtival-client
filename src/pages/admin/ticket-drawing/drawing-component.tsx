import { useState } from 'react';

import Button from '@shared/components/button/button';

import DrawingModal from './components/modal';
import * as styles from './drawing-component.css';

interface DrawingComponentProps {
  currentDay: string;
}

const DrawingComponent = ({ currentDay }: DrawingComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = () => {
    setIsModalOpen(false);
  };

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

export default DrawingComponent;
