import * as styles from './card.css';

interface CardProps {
  title: string;
  assignee?: string;
  description: string;
  img: string;
  type: 'sm' | 'lg';
  onClick?: () => void;
}

const Card = ({
  title,
  assignee,
  description,
  img,
  type,
  onClick,
}: CardProps) => {
  return (
    <div
      className={styles.container({ type })}
      onClick={onClick}
    >
      <div className={styles.blur} />
      <div className={styles.content}>
        <p className={styles.title({ type })}>{title}</p>
        {assignee && <p className={styles.assignee}>{assignee}</p>}
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
