import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './card.css';

interface CardProps {
  title: string;
  assignee?: string;
  description: string;
  type: 'sm' | 'lg';
  alt?: string;
  onClick: () => void;
  imgSrc: string;
  imgAlt?: string;
}

const Card = ({
  title,
  assignee,
  description,
  type,
  onClick,
  imgSrc,
  imgAlt,
}: CardProps) => {
  return (
    <div
      className={styles.container({ type })}
      onClick={onClick}
    >
      {/* <div className={styles.blur} /> */}
      <div className={styles.content}>
        <p className={styles.title({ type })}>{title}</p>
        {assignee && <p className={styles.assignee}>{assignee}</p>}
        <p className={styles.description({ type })}>{description}</p>
      </div>
      <div className={styles.img}>
        <Thumbnail
          src={imgSrc}
          alt={imgAlt}
          type="square_md"
        />
      </div>
    </div>
  );
};

export default Card;
