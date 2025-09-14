import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { IcSvgArrow } from '@shared/icons';

import * as styles from './top-navigation.css';

interface TopNavigationProps {
  title: ReactNode;
  rightIcon?: ReactNode;
  onRightClick?: () => void;
  backTo?: string;
  backState?: unknown;
}

const TopNavigation = ({
  title,
  rightIcon,
  onRightClick,
  backTo,
  backState,
}: TopNavigationProps) => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (backTo) {
      navigate(backTo, { state: backState });
    } else {
      navigate(-1);
    }
  };

  return (
    <nav className={styles.topnavigationVariants}>
      <button
        onClick={handleLeftClick}
        className={styles.leftButton}
      >
        <IcSvgArrow
          width="2.4rem"
          height="2.4rem"
        />
      </button>

      <h1 className={styles.title}>{title}</h1>

      <button
        onClick={onRightClick}
        className={styles.rightButton}
      >
        {rightIcon}
      </button>
    </nav>
  );
};

export default TopNavigation;
