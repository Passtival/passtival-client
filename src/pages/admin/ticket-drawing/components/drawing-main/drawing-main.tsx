import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@shared/components/button/button';

import DrawingModal from '../modal';
import * as styles from './drawing-main.css';

interface DrawingMainProps {
  currentDay: string;
}

const DrawingMain = ({ currentDay }: DrawingMainProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = () => {
    navigate('/drawing');
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

export default DrawingMain;
