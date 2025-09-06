import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { TITLE } from '@pages/admin/constants/TITLE';

import Button from '@shared/components/button/button';
import Input from '@shared/components/input/input';

import * as styles from './admin-login.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleAdminLogin = () => {
    navigate(routePath.ADMIN_MAIN);
  };

  return (
    <div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{TITLE.LOGIN}</p>
        <p className={styles.subTitle}>{TITLE.SUB}</p>
      </div>
      <div className={styles.loginContainer}>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <Button
          children="로그인"
          onClick={handleAdminLogin}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
