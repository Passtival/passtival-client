import * as styles from './detail-header.css';

interface DetailHeaderProps {
  subTitle: string;
  title: string;
}
const DetailHeader = ({ subTitle, title }: DetailHeaderProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>{subTitle}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default DetailHeader;
