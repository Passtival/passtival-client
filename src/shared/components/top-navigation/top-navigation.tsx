import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { IcSvgArrow } from '@shared/icons';

import * as styles from './top-navigation.css';

interface TopNavigationProps {
  title: ReactNode;
  rightIcon?: ReactNode;
  onRightClick?: () => void;
}

const TopNavigation = ({
  title,
  rightIcon,
  onRightClick,
}: TopNavigationProps) => {
  const navigation = useNavigate();
  const handleLeftClick = () => {
    navigation(-1);
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
