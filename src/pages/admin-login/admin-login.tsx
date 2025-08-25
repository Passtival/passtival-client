import { useState } from 'react';

import Button from '@shared/components/button/button';
import Input from '@shared/components/input/input';

import * as styles from './admin-login.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  return (
    <div>
      <p className={styles.title}>관리자 로그인</p>
      <div className={styles.loginContainer}>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
