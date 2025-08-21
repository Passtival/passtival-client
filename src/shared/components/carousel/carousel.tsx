import type { ReactNode } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './carousel.css';
import SlideIndicator from '../carousel/slideindicator/slideIndicator';

interface CarouselProps {
  children: ReactNode;
  type?: 'details' | 'Apply';
}

const Carousel = ({ children, type, ...settings }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 크기 재계산
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // 첫 번째 슬라이드로 이동하며 크기 재계산
    }
  }, [type]);

  const defaultSettings = {
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const applySettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true, // 중앙 모드 활성화
    centerPadding: '3rem',
  };

  const mergedSettings = {
    ...defaultSettings,
    ...(type === 'Apply' ? applySettings : {}),
    ...settings,
  };

  const totalSlides = React.Children.count(children);

  const typeStyle =
    type === 'Apply' ? styles.carouselType.Apply : styles.carouselType.details;

  const styledChildren = React.Children.map(children, (child, index) => {
    if (type === 'Apply' && React.isValidElement(child)) {
      const isLastChild = index === React.Children.count(children) - 1;
      return (
        <div
          className={`${styles.image} ${styles.slideContainer}`}
          style={{ marginRight: isLastChild ? 0 : '5rem' }} // 마지막 요소가 아니면 오른쪽 마진 적용
        >
          {React.cloneElement(child)}
        </div>
      );
    }
    return child;
  });

  return (
    <div className={` ${typeStyle}`}>
      <Slider {...mergedSettings}>{styledChildren}</Slider>
      <SlideIndicator
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
};

export default Carousel;
