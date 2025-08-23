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
  return (
    <div
      className={styles.container({ type })}
      onClick={onClick}
    >
      <div className={styles.blur} />
      <div className={styles.content}>
        <p className={styles.title({ type })}>{title}</p>
        {major && <p className={styles.major}>{major}</p>}
        <p className={styles.description({ type })}>{description}</p>
      </div>
      <img
        className={styles.img}
        src={img}
      />
    </div>
  );
};

export default Card;
