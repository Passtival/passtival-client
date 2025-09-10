import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { ADMIN_MUTATION_OPTIONS } from '@pages/admin/apis/queries';
import { TITLE } from '@pages/admin/constants/TITLE';

import Button from '@shared/components/button/button';
import Input from '@shared/components/input/input';
import { appConfig } from '@shared/configs/app-config';

import * as styles from './admin-login.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const { mutate, isPending } = useMutation({
    ...ADMIN_MUTATION_OPTIONS.ADMIN_LOGIN(),
    onSuccess: (isLoginSuccess) => {
      if (!isLoginSuccess) {
        alert('비밀번호가 올바르지 않습니다.');
        return;
      }
      navigate(appConfig.adminAuth.loginSuccessUrl || routePath.ADMIN_MAIN);
    },
    onError: () => {
      alert('로그인에 실패했습니다. 비밀번호를 확인해주세요.');
    },
  });

  const handleAdminLogin = () => {
    if (!password) return;
    mutate(password);
  };

  return (
    <>
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
          onClick={handleAdminLogin}
          disabled={!password || isPending}
        >
          로그인
        </Button>
      </div>
    </>
  );
};

export default AdminLogin;
