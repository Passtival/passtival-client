import { useState } from 'react';

import Button from '@shared/components/button/button';
import Input from '@shared/components/input/input';
import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './ticket.css';

const Ticket = () => {
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [key, SetKey] = useState('');

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
          src=""
          alt=""
          type="circle"
        />
        <p className={styles.productName}>에어팟 프로</p>
        <div className={styles.input}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
          />
          <Input
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            placeholder="학번"
          />{' '}
          <Input
            value={key}
            onChange={(e) => SetKey(e.target.value)}
            placeholder="인증키"
          />
        </div>
        <Button children="로그인" />
        <p className={styles.message}>
          일차별 행사 모두 참여시 전체 응모권 제공!
        </p>
      </div>
    </>
  );
};

export default Ticket;
