import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import { COMMUNITY_QUERY_OPTIONS } from '@pages/lost-items/apis/queries';

import { tokenService } from '@shared/auth/services/token-service';
import Button from '@shared/components/button/button';
import Card from '@shared/components/card/card';
import { themeVars } from '@shared/styles';

import { LOST_ITEMS } from './constants/lostItems';
import * as styles from './lost-items.css';

const LostItems = () => {
  const navigate = useNavigate();
  const { data } = useQuery(COMMUNITY_QUERY_OPTIONS.LOST_ITEMS_LIST());

  const isAdmin = !!tokenService.getAdminAccessToken();

  const handleCardClick = (id: number) => {
    navigate(`${routePath.LOST_ITEMS}/${id}`);
  };

  const handleReportClick = () => {
    navigate(`/lost-item-report`);
  };

  return (
    <>
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
        {data?.result?.map(({ id, title, area, imagePath }) => (
          <Card
            key={id}
            type="lg"
            imgSrc={imagePath}
            title={title}
            description={area}
            onClick={() => handleCardClick(id!)}
          />
        ))}
      </div>
    </>
  );
};

export default LostItems;
