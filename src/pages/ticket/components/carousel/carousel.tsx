import { useQuery } from '@tanstack/react-query';

import Carousel from '@shared/components/carousel/carousel';
import Loading from '@shared/components/loading/loading';

import * as styles from './carousel.css';
import { TICKET_QUERY_OPTIONS } from '../../apis/queries';

interface TicketCarouselProps {
  selectedDayNumber: number;
}

const TicketCarousel = ({ selectedDayNumber }: TicketCarouselProps) => {
  // API에서 데이터 가져오기
  const { data, isLoading, error } = useQuery({
    ...TICKET_QUERY_OPTIONS.RAFFLE_PRIZES(selectedDayNumber),
  });

  // API 데이터 사용
  if (isLoading) {
    return (
      <Loading
        size="medium"
        message="상품 정보를 불러오는 중..."
      />
    );
  }

  if (error) {
    return <p>상품 정보를 불러올 수 없습니다.</p>;
  }

  const prizes = data?.result || [];

  return (
    <>
      <Carousel type="Apply">
        {prizes.map((prize) => (
          <img
            key={prize.prizeId}
            src={prize.prizeImagePath}
            alt={prize.prizeName}
            className={styles.carouselImage}
          />
        ))}
      </Carousel>
    </>
  );
};

export default TicketCarousel;
