import { useState } from 'react';

import BoothList from '@pages/booth/components/booth-list';

import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import Header from '@shared/components/header/header';
import Title from '@shared/components/title/title';
import TitlInfo from '@shared/components/title-info/title-info';

import * as styles from './booth.css';
import {
  VENUE_GUIDE,
  BOOTH_INFO,
  BOOTH_INFO_DETAIL,
  BOOTH_TYPES,
} from './constants/booth-text';

const mokImages = ['/map1.png', '/map2.png'];

const Booth = () => {
  const [selectedType, setSelectedType] = useState(BOOTH_TYPES[0]);

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <div className={styles.container}>
        <div className={styles.noticeText}>
          <Title mainTitle={VENUE_GUIDE} />
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel type="details">
            {mokImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`행사장 이미지 ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </Carousel>
        </div>
        <div className={styles.boothinfoText}>
          <TitlInfo
            mainTitle={BOOTH_INFO}
            subTitle={BOOTH_INFO_DETAIL}
          />
        </div>
        <div className={styles.chipContainer}>
          {BOOTH_TYPES.map((type) => (
            <Chip
              key={type}
              label={type}
              selected={selectedType === type}
              onChange={() => setSelectedType(type)}
            />
          ))}
        </div>
        <div className={styles.cardContainer}>
          <BoothList selectedType={selectedType} />
        </div>
      </div>
    </>
  );
};
export default Booth;
