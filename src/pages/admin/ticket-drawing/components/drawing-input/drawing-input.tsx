import * as styles from './drawing-input.css';

interface DrawingInputProps {
  value: string;
  placeholder: string;
  size?: 'sm' | 'lg';
  readOnly?: boolean;
}

const DrawingInput = ({
  value,
  placeholder,
  size = 'sm',
  readOnly = true,
}: DrawingInputProps) => {
  return (
    <>
      <input
        className={styles.size({ size })}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </>
  );
};

export default DrawingInput;
