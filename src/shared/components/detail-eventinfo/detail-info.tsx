import * as styles from './detail-info.css';

interface EventInfoProps {
  title?: string;
  time1: string;
  time2: string;
  location1: string | number;
  location2: string;
  message?: string;
}

const DetailInfo = ({
  title,
  time1,
  time2,
  location1,
  location2,
  message,
}: EventInfoProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.line}>
        <p className={styles.label}>{time1}</p>
        <p className={styles.value}>{location1}</p>
      </div>
      <div className={styles.line}>
        <p className={styles.label}>{time2}</p>
        <p className={styles.value}>{location2}</p>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default DetailInfo;
