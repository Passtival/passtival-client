import type { MouseEvent } from 'react';

import * as styles from './card.css';

interface CardProps {
  title: string;
  major?: string;
  description: string;
  img: string;
  type: 'details' | 'apply';
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Card = ({ title, major, description, img, type, onClick }: CardProps) => {
  const containerStyle = styles.container({ type });
  const titleStyle = styles.title({ type });
  const majorStyle = styles.major;
  const descriptionStyle = styles.description({ type });

  return (
    <div
      className={containerStyle}
      onClick={onClick}
    >
      <div className={styles.blur} />
      <div className={styles.content}>
        <p className={titleStyle}>{title}</p>
        {major && <p className={majorStyle}>{major}</p>}
        <p className={descriptionStyle}>{description}</p>
      </div>
      <img
        className={styles.img}
        src={img}
      />
    </div>
  );
};

export default Card;
