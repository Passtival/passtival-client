import * as styles from './detail-eventinfo.css';

interface EventInfoProps {
  label1: string;
  label2: string;
  value1: string | number;
  value2: string;
  message?: string;
}

const DetailEventInfo = ({
  label1,
  label2,
  value1,
  value2,
  message,
}: EventInfoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <p className={styles.label}>{label1}</p>
        <p className={styles.value}>{value1}</p>
      </div>
      <div className={styles.line}>
        <p className={styles.label}>{label2}</p>
        <p className={styles.value}>{value2}</p>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default DetailEventInfo;
