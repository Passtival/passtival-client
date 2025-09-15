import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as styles from './card.css';

interface CardProps {
  title?: string;
  assignee?: string;
  description?: string;
  type: 'sm' | 'lg';
  descType: 'sm' | 'md' | 'lg';
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
  descType,
  onClick,
  imgSrc,
  imgAlt,
}: CardProps) => {
  return (
    <article
      className={styles.container}
      onClick={onClick}
    >
      <div className={styles.content}>
        <p className={styles.title({ type })}>{title}</p>
        {assignee && <p className={styles.assignee}>{assignee}</p>}
        <p className={styles.description({ descType })}>{description}</p>
      </div>
      <Thumbnail
        src={imgSrc}
        alt={imgAlt}
        type="square_md"
      />
    </article>
  );
};

export default Card;
