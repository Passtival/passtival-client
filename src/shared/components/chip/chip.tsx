import type { ReactNode } from 'react';

import { chipVariants } from './chip.css';

interface ChipProps {
  label: ReactNode;
  selected: boolean;
  onChange: (isSelected: boolean) => void;
  size?: 'sm' | 'lg';
}

const Chip = ({ label, selected, onChange, size = 'sm' }: ChipProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={chipVariants({ selected, size })}
      onClick={() => onChange(!selected)}
    >
      {label}
    </button>
  );
};
export default Chip;
