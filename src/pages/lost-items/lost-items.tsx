import Card from '@shared/components/card/card';

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
  return (
    <>
      <p className={styles.header}>분실물</p>
      <p className={styles.subheader}>운영본부 부스(1번)에서 보관 중입니다.</p>
      <div className={styles.cardlist}>
        {lostMock.map((item) => (
          <Card
            key={item.id}
            type="lg"
            imgSrc={item.src}
            imgAlt={item.alt}
            title={item.title}
            description={item.description}
            onClick={() => {}}
          />
        ))}
      </div>
    </>
  );
};

export default LostItems;
