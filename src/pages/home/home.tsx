import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import TimeTable from '@shared/components/timeTable/timeTable';
import Title from '@shared/components/title/title';
import { HOME_TEXT } from '@shared/constants/festivalSchedule';

import * as styles from './home.css';

const mokImages = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
];

const MOCK_TITME_TABLE = [
  {
    id: 1,
    day: 1,
    startIso: '2025-08-28T13:00:00',
    endIso: '2025-08-28T14:00:00',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 1 이미지',
  },
  {
    id: 2,
    day: 1,
    startIso: '2025-08-28T13:00:00',
    endIso: '2025-08-28T14:00:00',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자2',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 1 이미지',
  },
  {
    id: 3,
    day: 1,
    startIso: '2025-08-28T13:00:00',
    endIso: '2025-08-28T14:00:00',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자3333',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 1 이미지',
  },
  {
    id: 4,
    day: 1,
    startIso: '2025-08-28T13:00:00',
    endIso: '2025-08-28T14:00:00',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자1',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 1 이미지',
  },
  {
    id: 5,
    day: 2,
    startIso: '2025-08-28T15:00:00',
    endIso: '2025-08-28T16:00:00',
    title: '공연 2',
    assignee: '디자인',
    description: '#흥겨운 무대',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 2 이미지',
  },
  {
    id: 6,
    day: 3,
    startIso: '2025-08-28T18:00:00',
    endIso: '2025-08-28T19:30:00',
    title: '공연 3',
    assignee: '경영',
    description: '#마지막날을_불태우자',
    imgSrc: 'https://placehold.co/600x400',
    imgAlt: '공연 3 이미지',
  },
];

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/show-detail/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.noticeText}>
        <Title
          mainTitle={HOME_TEXT.NOTICE}
          subTitle={HOME_TEXT.FESTIVAL_PERIOD}
        />
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
      <div className={styles.festivalScheduleText}>
        <Title
          mainTitle={HOME_TEXT.TODAY_FESTIVAL_SCHEDULE}
          subTitle={HOME_TEXT.TODAY_FESTIVAL_SCHEDULE_DETAIL}
        />
      </div>
      <div className={styles.chipContainer}>
        {HOME_TEXT.FESTIVAL_DAY.map((dayLabel, idx) => {
          const dayNumber = idx + 1;
          return (
            <Chip
              key={dayNumber}
              label={dayLabel}
              selected={selectedDay === dayNumber}
              onChange={() => setSelectedDay(dayNumber)}
            />
          );
        })}
      </div>
      {MOCK_TITME_TABLE.filter((schedule) => schedule.day === selectedDay).map(
        ({
          id,
          startIso,
          endIso,
          title,
          assignee,
          description,
          imgSrc,
          imgAlt,
        }) => (
          <TimeTable
            key={id}
            startIso={startIso}
            endIso={endIso}
            title={title}
            assignee={assignee}
            description={description}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            onClick={() => handleClick(id)}
          />
        ),
      )}
    </div>
  );
};
export default Home;
