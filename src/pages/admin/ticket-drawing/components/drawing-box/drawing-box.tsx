import { buttonVariants } from './drawing-box.css';

type DrawingBoxSize = 'sm' | 'lg';
type DrawingBoxColor = 'white' | 'gray' | 'white';

interface DrawingBoxProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  size?: DrawingBoxSize;
  color?: DrawingBoxColor;
}

const DrawingBox = ({
  children,
  onClick,
  disabled = true,
  size = 'sm',
  color = 'white',
}: DrawingBoxProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonVariants({ size, color })}
    >
      {children}
    </button>
  );
};

export default DrawingBox;
