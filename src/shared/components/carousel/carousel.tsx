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
  type?: 'details' | 'Apply';
}

const Carousel = ({ children, type, infinite, ...settings }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = React.Children.count(children);

  const mergedSettings =
    type === 'details'
      ? {
          infinite: false,
          afterChange: (index: number) => setCurrentSlide(index),
        }
      : {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          cssEase: 'linear',
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: false,
          dots: false,
          ...settings,
        };

  const typeStyle =
    type === 'details'
      ? styles.carouselType.details
      : styles.carouselType.Apply;

  const styledChildren = React.Children.map(children, (child) => {
    if (type === 'Apply' && React.isValidElement(child)) {
      return <div className={styles.image}>{React.cloneElement(child)}</div>;
    }
    return child;
  });

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
