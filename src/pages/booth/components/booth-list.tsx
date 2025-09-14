import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Card from '@shared/components/card/card';
import ErrorMessage from '@shared/components/error-message/error-message';
import Loading from '@shared/components/loading/loading';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';

import { BOOTH_INFINITE_QUERY_OPTIONS } from '../apis/queries';

interface BoothListProps {
  selectedType: string;
}

interface Booth {
  id: number;
  type: string;
}

const BoothList = ({ selectedType }: BoothListProps) => {
  const navigate = useNavigate();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(BOOTH_INFINITE_QUERY_OPTIONS.BOOTHS_CURSOR(5));

  const intersectionRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, hasNextPage && !isFetchingNextPage);

  const handleClick = (booth: Booth) => {
    navigate(`/booth-detail/${booth.id}`, {
      state: {
        boothType: booth.type,
        selectedType,
      },
    });
  };

  if (isLoading) {
    return (
      <Loading
        size="medium"
        message="부스 정보를 불러오는 중..."
      />
    );
  }

  if (error) {
    return <ErrorMessage message="부스 정보를 불러올 수 없습니다." />;
  }

  return (
    <>
      {data?.pages
        .flatMap((page) => page?.result?.content || [])
        .filter((booth) =>
          selectedType === '전체' ? true : booth?.type === selectedType,
        )
        .map((booth) => (
          <Card
            type="sm"
            descType="md"
            key={booth.id}
            title={booth.name}
            assignee={booth.department}
            description={booth.info}
            imgSrc={booth.imagePath}
            imgAlt={`${booth.name} 이미지`}
            onClick={() => handleClick(booth)}
          />
        ))}
      {hasNextPage && (
        <div
          ref={intersectionRef}
          style={{ height: '1px' }}
        />
      )}
      {isFetchingNextPage && <div>더 많은 부스를 불러오는 중...</div>}
    </>
  );
};

export default BoothList;
