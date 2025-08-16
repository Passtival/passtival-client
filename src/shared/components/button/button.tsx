import type { ReactNode } from 'react';

import { buttonVariants } from './button.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  color?: 'blue';
  size?: 'sm' | 'lg';
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  color = 'blue',
  size = 'lg',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonVariants({ color, size })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
