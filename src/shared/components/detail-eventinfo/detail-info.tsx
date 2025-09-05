import * as styles from './detail-info.css';

interface EventInfoProps {
  title?: string;
  time: string;
  timevalue: string | number;
  location: string;
  locationvalue: string;
  message?: string;
}

const DetailInfo = ({
  title,
  time,
  timevalue,
  location,
  locationvalue,
  message,
}: EventInfoProps) => {
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.line}>
        <p className={styles.label}>{time}</p>
        <p className={styles.value}>{timevalue}</p>
      </div>
      <div className={styles.line}>
        <p className={styles.label}>{location}</p>
        <p className={styles.value}>{locationvalue}</p>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default DetailInfo;
