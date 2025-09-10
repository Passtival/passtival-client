import type { ReactNode } from 'react';
import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './carousel.css';
import SlideIndicator from '../carousel/slideindicator/slideIndicator';

interface CarouselProps {
  children: ReactNode;
  autoplay?: boolean;
  infinite?: boolean;
  type?: 'details' | 'Apply';
}

const Carousel = ({ children, type, infinite, autoplay }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = React.Children.count(children);

  const isDetailsType = type === 'details';

  const mergedSettings = isDetailsType
    ? {
        autoplay: autoplay,
        infinite: infinite,
        autoplaySpeed: 2000,
        afterChange: (index: number) => setCurrentSlide(index),
      }
    : {
        autoplaySpeed: 2000,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: false,
      };

  const styledChildren = isDetailsType
    ? children
    : React.Children.map(children, (child) => <div>{child}</div>);

  return (
    <div className={styles.carousel}>
      <Slider {...mergedSettings}>{styledChildren}</Slider>
      {type === 'details' && (
        <SlideIndicator
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        />
      )}
    </div>
  );
};

export default Carousel;
