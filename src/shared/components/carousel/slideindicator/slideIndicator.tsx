import * as styles from './slideindicator.css';

interface SlideIndicatorProps {
  currentSlide: number;
  totalSlides: number;
}

const SlideIndicator = ({ currentSlide, totalSlides }: SlideIndicatorProps) => {
  const displayCurrent = currentSlide + 1;

  return (
    <div className={styles.container}>
      {displayCurrent}/{totalSlides}
    </div>
  );
};

export default SlideIndicator;
