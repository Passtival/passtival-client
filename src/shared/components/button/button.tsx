import type { ReactNode } from 'react';

import { buttonVariants } from './button.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  color?: 'blue' | 'gray';
  size?: 'sm' | 'lg';
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  color,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonVariants({ disabled, color, size })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
