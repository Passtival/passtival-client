import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@shared/components/button/button';
import Card from '@shared/components/card/card';
import { themeVars } from '@shared/styles';

import * as styles from './lost-items.css';

const lostMock = [
  {
    id: 1,
    title: '100만원',
    description: '길가에서 주운 100만원',
    src: '',
    alt: '',
  },
  {
    id: 2,
    title: '전공책',
    description: '아리관 6층 3번째 계단',
    src: '',
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

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p style={themeVars.fontStyles.title_b_20}>분실물</p>
          <p style={themeVars.fontStyles.caption2_m_12}>
            운영본부 부스(1번)에서 보관 중입니다.
          </p>
        </div>
        {isAdmin && (
          <Button
            children="분실물 등록"
            size="sm"
            onClick={() => {}}
          />
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
            onClick={() => navigate(`/lost-items/${item.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default LostItems;
