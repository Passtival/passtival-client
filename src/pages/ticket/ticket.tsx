import { useState } from 'react';

import InputSection from '@pages/ticket/components/inpur-section/input-section';

import Button from '@shared/components/button/button';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import TicketModal from './components/ticketmodal';
import * as styles from './ticket.css';

const ticketData = {
  src: '',
  productName: '에어팟 프로',
};

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
      <div className={styles.headercontainer}>
        <p className={styles.header}>프리미엄 응모권</p>
        <p className={styles.subheader}>
          축제 기간 중 한 번만 응모할 수 있습니다.
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.product}>당첨 상품</p>
        <Thumbnail
          src={ticketData.src}
          alt=""
          type="square_lg"
        />
        <p className={styles.productName}>{ticketData.productName}</p>
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
        <p className={styles.message}>
          일차별 행사 모두 참여시 전체 응모권 제공!
        </p>
      </div>
      <TicketModal
        modalType={modalType}
        name={name}
        studentNumber={studentNumber}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default Ticket;
