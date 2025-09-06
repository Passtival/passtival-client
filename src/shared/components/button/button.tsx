import type { ReactNode } from 'react';

import { IcSvgArrowRight } from '@shared/icons';

import * as styles from './button.css';

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  color?: 'yellow' | 'gray';
  size?: 'sm' | 'lg' | 'icon' | 'xl';
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  color = 'yellow',
  size = 'lg',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={styles.buttonVariants({ color, size })}
      onClick={onClick}
    >
      {size === 'icon' ? (
        <>
          <span>{children}</span>
          <IcSvgArrowRight
            width={20}
            height={20}
          />
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
