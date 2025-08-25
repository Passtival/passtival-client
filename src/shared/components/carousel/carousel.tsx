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
        afterChange: (index: number) => setCurrentSlide(index),
      }
    : {
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
      };

  const typeStyle = isDetailsType
    ? styles.carouselType.details
    : styles.carouselType.Apply;

  const styledChildren = isDetailsType
    ? children
    : React.Children.map(children, (child) => (
        <div className={styles.img}>{child}</div>
      ));

  return (
    <div className={`${typeStyle}`}>
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
