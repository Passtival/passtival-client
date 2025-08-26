import * as styles from './detail-description.css';

interface DescriptionProps {
  title: string;
  description: string;
}

const DetailDescription = ({ title, description }: DescriptionProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DetailDescription;
