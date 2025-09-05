import type { ReactNode } from 'react';

import { chipVariants } from './chip.css';

interface ChipProps {
  label: ReactNode;
  selected: boolean;
  onChange: (isSelected: boolean) => void;
  size?: 'sm' | 'lg';
  disabled?: boolean;
}

const Chip = ({
  label,
  selected,
  onChange,
  size = 'sm',
  disabled,
}: ChipProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={chipVariants({ selected, size })}
      onClick={() => onChange(!selected)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Chip;
