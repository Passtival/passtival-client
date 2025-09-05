import { useState } from 'react';

import InputSection from '@pages/ticket/components/inpur-section/input-section';

import Button from '@shared/components/button/button';
import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import Title from '@shared/components/title/title';

import Caption from './components/caption/caption';
import TicketModal from './components/ticketmodal';
import * as styles from './ticket.css';

const Ticket = () => {
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [key, setKey] = useState('');
  const [modalType, setModalType] = useState<
    'confirm' | 'success' | 'info' | 'error' | null
  >(null);
  const isErrorState = modalType === 'error' || modalType === 'info';

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentNumber(e.target.value);
  };

  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  const handleApplyClick = () => {
    if (name && studentNumber && key) {
      setModalType('confirm');
    }
  };

  const handleConfirm = () => {
    setModalType('success');
  };

  const handleCloseModal = () => {
    setModalType(null);
    setName('');
    setStudentNumber('');
    setKey('');
  };

  return (
    <>
      <div className={styles.container}>
        <Title
          mainTitle="상품 응모권"
          subTitle="상품 당첨의 기회를 잡아보세요!"
        />

        <Carousel type="Apply">
          <img src="/carousel1.jpg" />
          <img src="/carousel2.jpg" />
          <img src="/carousel3.jpg" />
        </Carousel>
        <InputSection
          name={name}
          studentNumber={studentNumber}
          accessKey={key}
          isErrorState={isErrorState}
          onNameChange={handleChangeName}
          onStudentNumberChange={handleChangeNumber}
          onKeyChange={handleChangeKey}
        />
        <Button onClick={handleApplyClick}>응모하기</Button>

        <TicketModal
          modalType={modalType}
          name={name}
          studentNumber={studentNumber}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
        <Caption />
      </div>
    </>
  );
};

export default Ticket;
