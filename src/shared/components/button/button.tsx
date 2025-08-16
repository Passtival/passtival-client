import type { ReactNode } from 'react';

import { buttonVariants } from './button.css';

interface ButtonProps {
  label: ReactNode;
  kind: 'blue' | 'yellow' | 'gray';
  size: 'small' | 'middle' | 'big';
  onClick: () => void;
}

const Button = ({ label, kind, size, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ kind, size })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
