import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { PERFORMANCE_QUERY_OPTIONS } from '@pages/home/apis/queries';

import Carousel from '@shared/components/carousel/carousel';
import Chip from '@shared/components/chip/chip';
import Header from '@shared/components/header/header';
import TimeTable from '@shared/components/timeTable/timeTable';
import Title from '@shared/components/title/title';
import TitleInfo from '@shared/components/title-info/title-info';
import { HOME_TEXT } from '@shared/constants/festivalSchedule';
import { usePersistedState } from '@shared/hooks/use-persisted-state';

import * as styles from './home.css';

const mokImages = ['/info.webp'];

const Home = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = usePersistedState('homeSelectedDay', 1);

  const { data } = useQuery(PERFORMANCE_QUERY_OPTIONS.PERFORMANCE_LIST());

  const handleClick = (id: number | undefined) => {
    if (id)
      navigate(`/show-detail/${id}`, {
        state: {
          selectedDay,
        },
      });
  };

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
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
                alt={`공지 이미지 ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </Carousel>
        </div>
        <div className={styles.festivalScheduleText}>
          <TitleInfo
            mainTitle={HOME_TEXT.TODAY_FESTIVAL_SCHEDULE}
            subTitle={`${selectedDay}일차 ${HOME_TEXT.TODAY_FESTIVAL_SCHEDULE_DETAIL}`}
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
        {data
          ?.filter((schedule) => schedule.day === selectedDay)
          .map(
            ({
              id,
              title,
              artist,
              startTime,
              endTime,
              imagePath,
              introduction,
            }) => (
              <TimeTable
                key={id}
                startIso={startTime || ''}
                endIso={endTime || ''}
                title={title || ''}
                assignee={artist || ''}
                description={introduction || ''}
                imgSrc={imagePath || ''}
                imgAlt={title || ''}
                onClick={() => handleClick(id)}
              />
            ),
          )}
      </div>
    </>
  );
};
export default Home;
