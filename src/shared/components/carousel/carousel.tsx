import type { ReactNode } from 'react';
import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './carousel.css';
import SlideIndicator from '../carousel/slideindicator/slideIndicator';

interface CarouselProps {
  children: ReactNode;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const Carousel = ({ children, ...settings }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSettings = {
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const mergedSettings = { ...defaultSettings, ...settings };
  const totalSlides = React.Children.count(children);

  return (
    <div className={styles.container}>
      <Slider {...mergedSettings}>{children}</Slider>
      <SlideIndicator
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
};

export default Carousel;
