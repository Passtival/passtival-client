import type { ReactNode } from 'react';

import { IcSvgBack, IcSvgTrashcan } from '@shared/icons';

import * as styles from './top-navigation.css';

interface TopNavigationProps {
  title: ReactNode;
  rightIcon?: ReactNode;
}

const TopNavigation = ({
  title,
  rightIcon = <IcSvgTrashcan className={styles.rightIcon} />,
}: TopNavigationProps) => {
  return (
    <nav className={styles.topnavigationVariants}>
      <button className={styles.leftButton}>
        <IcSvgBack className={styles.leftIcon} />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.rightButton}>{rightIcon}</button>
    </nav>
  );
};

export default TopNavigation;
