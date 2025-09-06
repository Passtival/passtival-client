import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { IcSvgLogo } from '@shared/icons';

import * as styles from './land.css';

const CONTENT = {
  TITLE: 'Passtival',
  DESCRIPTION: '안양대 축제를 한눈에 담은\n단 하나의 앱',
};

const LAND_TIMEOUT = 2000;

const Land = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(routePath.ONBOARDING);
    }, LAND_TIMEOUT);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <IcSvgLogo />
      <div className={styles.title}>{CONTENT.TITLE}</div>
      <div className={styles.passtival}>{CONTENT.DESCRIPTION}</div>
    </div>
  );
};

export default Land;
