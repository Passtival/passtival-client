import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './card.css';

interface CardProps {
  title?: string;
  assignee?: string;
  description?: string;
  type: 'sm' | 'lg';
  alt?: string;
  onClick?: () => void;
  imgSrc?: string;
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
      className={styles.container}
      onClick={onClick}
    >
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <p className={styles.title({ type })}>{title}</p>
          {assignee && <p className={styles.assignee}>{assignee}</p>}
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description({ type })}>{description}</p>
        </div>
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
