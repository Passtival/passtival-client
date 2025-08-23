import * as styles from './card.css';

interface CardProps {
  title: string;
  major?: string;
  description: string;
  img: string;
  type: 'details' | 'apply';
}

const Card = ({ title, major, description, img, type }: CardProps) => {
  const containerStyle = styles.container({ type });
  const titleStyle = styles.title({ type });
  const majorStyle = styles.major;
  const descriptionStyle = styles.description({ type });

  return (
    <div className={containerStyle}>
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
