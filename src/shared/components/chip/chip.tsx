import type { ReactNode } from 'react';

import { chipVariants } from './chip.css';

interface ChipProps {
  label: ReactNode;
  selected: boolean;
  onChange: (isSelected: boolean) => void;
}

const Chip = ({ label, selected, onChange }: ChipProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={chipVariants({ selected })}
      onClick={() => onChange(!selected)}
    >
      {label}
    </button>
  );
};
export default Chip;
