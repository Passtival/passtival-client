import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { COMMUNITY_QUERY_OPTIONS } from '@pages/lost-items/apis/queries';

import { tokenService } from '@shared/auth/services/token-service';
import Button from '@shared/components/button/button';
import Card from '@shared/components/card/card';
import ErrorMessage from '@shared/components/error-message/error-message';
import Header from '@shared/components/header/header';
import Loading from '@shared/components/loading/loading';
import { themeVars } from '@shared/styles';

import { LOST_ITEMS } from './constants/lostItems';
import * as styles from './lost-items.css';

const LostItems = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery(
    COMMUNITY_QUERY_OPTIONS.LOST_ITEMS_LIST(),
  );

  const isAdmin = !!tokenService.getAdminAccessToken();

  const handleCardClick = (id: number) => {
    navigate(`${routePath.LOST_ITEMS}/${id}`);
  };

  const handleReportClick = () => {
    navigate(`/lost-item-report`);
  };

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p style={themeVars.fontStyles.title_b_20}>
            {LOST_ITEMS.LOST_ITEMS_TITLE}
          </p>
          <p style={themeVars.fontStyles.caption2_m_12}>
            {LOST_ITEMS.OPERATIONS_BOOTH_LOCATION}
          </p>
        </div>
        {isAdmin && (
          <Button
            size="sm"
            onClick={handleReportClick}
          >
            {LOST_ITEMS.LOST_ITEM_REGISTER_BUTTON_LABEL}
          </Button>
        )}
      </div>
      <div className={styles.cardlist}>
        {isLoading ? (
          <Loading
            size="medium"
            message="분실물 정보를 불러오는 중..."
          />
        ) : error ? (
          <ErrorMessage message="분실물 정보를 불러올 수 없습니다." />
        ) : (
          data?.result?.map(({ id, title, area, imagePath }) => (
            <Card
              key={id}
              type="lg"
              descType="lg"
              imgSrc={imagePath}
              title={title}
              description={area}
              onClick={() => handleCardClick(id!)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default LostItems;
