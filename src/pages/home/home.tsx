import { useState } from 'react';

import Button from '@shared/components/button/button';
import Input from '@shared/components/input/input';

import * as styles from '../lost-items/admin-login.css';

const AdminLogin = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <p className={styles.title}>관리자 로그인</p>
      <div className={styles.container}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="비밀번호"
        />
        <Button
          children="로그인"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
