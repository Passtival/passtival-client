import * as styles from './info-section.css';
import DrawingButton from '../drawing-button/drawing-button';
import DrawingInput from '../drawing-input/drawing-input';

interface InfoSectionProps {
  value: string;
  studentnumber: string;
  handleButtonClick: () => void;
}

const InfoSection = ({
  value,
  studentnumber,
  handleButtonClick,
}: InfoSectionProps) => {
  return (
    <div className={styles.section}>
      <DrawingInput
        value={value}
        placeholder="없음"
      />
      <DrawingInput
        value={studentnumber}
        placeholder="추첨되지 않음"
        size="lg"
      />
      <DrawingButton
        value={value}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default InfoSection;
