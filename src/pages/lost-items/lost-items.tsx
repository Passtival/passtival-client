import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@router/path';

import Button from '@shared/components/button/button';
import Card from '@shared/components/card/card';
import { themeVars } from '@shared/styles';

import { LOST_ITEMS } from './constants/lostItems';
import * as styles from './lost-items.css';

const lostMock = [
  {
    id: 1,
    title: '100만원',
    description: '길가에서 주운 100만원',
    src: 'https://placehold.co/600x400',
    alt: '',
  },
  {
    id: 2,
    title: '전공책',
    description: '아리관 6층 3번째 계단',
    src: 'https://placehold.co/600x400',
    alt: '',
  },
];

const LostItems = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole: 'user' | 'admin' = 'admin';
    setIsAdmin(userRole === 'admin');
  }, []);

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
        {lostMock.map((item) => (
          <Card
            key={item.id}
            type="lg"
            imgSrc={item.src}
            imgAlt={item.alt}
            title={item.title}
            description={item.description}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default LostItems;
