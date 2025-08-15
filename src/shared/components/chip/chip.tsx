import { chipVariants } from './chip.css';

interface ChipProps {
  label: React.ReactNode;
  selected: boolean;
  onChange: (next: boolean) => void;
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
