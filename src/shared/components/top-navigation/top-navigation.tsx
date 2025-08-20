import type { ReactNode } from 'react';

import { IcSvgBack } from '@shared/icons';

import * as styles from './top-navigation.css';

interface TopNavigationProps {
  title: ReactNode;
  rightIcon?: ReactNode;
  onLeftClick: () => void;
  onRightClick?: () => void;
}

const TopNavigation = ({
  title,
  rightIcon,
  onLeftClick,
  onRightClick,
}: TopNavigationProps) => {
  return (
    <nav className={styles.topnavigationVariants}>
      <button
        onClick={onLeftClick}
        className={styles.leftButton}
      >
        <IcSvgBack
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
