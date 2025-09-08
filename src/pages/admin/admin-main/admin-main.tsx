import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { NAVIGATE } from '@pages/admin/constants/NAVIGATE';
import { TITLE } from '@pages/admin/constants/TITLE';

import Button from '@shared/components/button/button';

import * as styles from './admin-main.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <p className={styles.title}>{TITLE.MAIN}</p>

      <div className={styles.loginContainer}>
        <Button
          onClick={() => {
            handleNavigate(routePath.LOST_ITEMS);
          }}
        >
          {NAVIGATE.LOST_ITEM}
        </Button>
        <Button
          onClick={() => {
            handleNavigate(routePath.GENERATE_AUTH_KEY);
          }}
        >
          {NAVIGATE.AUTH_KEY}
        </Button>
        <Button
          onClick={() => {
            handleNavigate(routePath.TICKET_DRAWING);
          }}
        >
          {NAVIGATE.TICKET}
        </Button>
      </div>
    </>
  );
};

export default AdminLogin;
