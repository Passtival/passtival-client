import { useState } from 'react';

import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import TimeTable from '@shared/components/timeTable/timeTable';
import Title from '@shared/components/title/title';
import { HOME_TEXT } from '@shared/constants/festivalSchedule';

import * as styles from './home.css';

const mokImages = ['아~~~', '나의 맥북님은...', '언제 오시나...'];

const schedules = [
  {
    day: 1,
    startIso: '2025-08-28T13:00:00',
    endIso: '2025-08-28T14:00:00',
    title: '공연 1',
    assignee: '컴공',
    description: '#즐겨보자',
    imgSrc: '/images/sample1.png',
    imgAlt: '공연 1 이미지',
  },
  {
    day: 2,
    startIso: '2025-08-28T15:00:00',
    endIso: '2025-08-28T16:00:00',
    title: '공연 2',
    assignee: '디자인',
    description: '#흥겨운 무대',
    imgSrc: '/images/sample2.png',
    imgAlt: '공연 2 이미지',
  },
  {
    day: 3,
    startIso: '2025-08-28T18:00:00',
    endIso: '2025-08-28T19:30:00',
    title: '공연 3',
    assignee: '경영',
    description: '#마지막날을_불태우자',
    imgSrc: '/images/sample3.png',
    imgAlt: '공연 3 이미지',
  },
];

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.noticeText}>
        <Title
          mainTitle={HOME_TEXT.NOTICE}
          subTitle={HOME_TEXT.FESTIVAL_PERIOD}
        />
      </div>
      <Carousel type="details">
        {mokImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`분실물 이미지 ${index + 1}`}
          />
        ))}
      </Carousel>
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
      {schedules
        .filter((schedule) => schedule.day === selectedDay)
        .map((schedule, idx) => (
          <TimeTable
            key={idx}
            {...schedule}
          />
        ))}
    </div>
  );
};
export default Home;
