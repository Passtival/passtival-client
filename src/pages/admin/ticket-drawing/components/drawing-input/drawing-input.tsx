import * as styles from './drawing-input.css';

interface DrawingInputProps {
  value: string;
  placeholder: string;
  size: 'sm' | 'lg';
}

const DrawingInput = ({
  value,
  placeholder,
  size = 'sm',
}: DrawingInputProps) => {
  return (
    <>
      <input
        className={styles.size({ size })}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default DrawingInput;
