import { useRef } from 'react';
import type { ChangeEvent } from 'react';

import * as styles from './input.css';

interface InputProps {
  value: string;
  errorState?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({ value, errorState, onChange, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={inputRef}
      enterKeyHint="done"
      value={value}
      className={styles.inputVariants({ hasError: !!errorState })}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
