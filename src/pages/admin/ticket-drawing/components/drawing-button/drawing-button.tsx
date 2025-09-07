import * as styles from './drawing-button.css';

interface DrawingButtonProps {
  value: string;
  onClick: () => void;
}

const DrawingButton = ({ value, onClick }: DrawingButtonProps) => {
  const buttonText = value ? '재추첨' : '추첨';

  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default DrawingButton;
