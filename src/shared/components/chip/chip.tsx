import type { ReactNode } from 'react';

import { chipVariants } from './chip.css';

interface ChipProps {
  label: ReactNode;
  selected: boolean;
  onChange: (isSelected: boolean) => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Chip = ({
  label,
  selected,
  onChange,
  disabled,
  fullWidth,
}: ChipProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={chipVariants({ selected, fullWidth })}
      onClick={() => onChange(!selected)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Chip;
