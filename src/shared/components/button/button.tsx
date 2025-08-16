import type { ReactNode } from 'react';

import { buttonVariants } from './button.css';

interface ButtonProps {
  label: ReactNode;
  color: 'blue' | 'yellow' | 'gray';
  size: 'small' | 'middle' | 'big';
  onClick: () => void;
}

const Button = ({ label, color, size, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ color, size })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
