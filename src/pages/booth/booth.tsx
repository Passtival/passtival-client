import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@shared/components/card/card';
import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import Header from '@shared/components/header/header';
import Title from '@shared/components/title/title';

import * as styles from './booth.css';
import {
  VENUE_GUIDE,
  BOOTH_INFO,
  BOOTH_INFO_DETAIL,
  BOOTH_TYPES,
} from './constants/booth-text';

const mokImages = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
];

const MOCK_BOOTH_DATA = [
  {
    id: 1,
    boothType: '학내부스',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 1 이미지',
  },
  {
    id: 2,
    boothType: '체험',
    title: '공연 2',
    assignee: '디자인',
    description: '#흥겨운 무대',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 2 이미지',
  },
  {
    id: 3,
    boothType: '푸드존',
    title: '공연 3',
    assignee: '경영',
    description: '#마지막날을_불태우자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 3 이미지',
  },
  {
    id: 4,
    boothType: '푸드존',
    title: '공연 3',
    assignee: '경영',
    description: '#마지막날을_불태우자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 3 이미지',
  },
  {
    id: 5,
    boothType: '푸드존',
    title: '공연 3',
    assignee: '경영',
    description: '#마지막날을_불태우자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 3 이미지',
  },
];

const Booth = () => {
  const [selectedType, setSelectedType] = useState(BOOTH_TYPES[0]);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/booth-detail/${id}`);
  };

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="square"
        bgColor="gray"
      />
      <div className={styles.noticeText}>
        <Title mainTitle={VENUE_GUIDE} />
      </div>
      <div className={styles.carouselWrapper}>
        <Carousel type="details">
          {mokImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`분실물 이미지 ${index + 1}`}
            />
          ))}
        </Carousel>
      </div>
      <div className={styles.boothinfoText}>
        <Title
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
        {MOCK_BOOTH_DATA.filter((schedule) =>
          selectedType === '전체' ? true : schedule.boothType === selectedType,
        ).map(({ id, title, assignee, description, imgSrc, imgAlt }) => (
          <Card
            type="lg"
            key={id}
            title={title}
            assignee={assignee}
            description={description}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            onClick={() => handleClick(id)}
          />
        ))}
      </div>
    </>
  );
};
export default Booth;
