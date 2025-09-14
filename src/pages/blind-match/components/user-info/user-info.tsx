import * as styles from './user-info.css';

interface UserInfoProps {
  title: string;
  instaId?: string;
  phoneNumber: string;
}

const UserInfo = ({ title, instaId, phoneNumber }: UserInfoProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.infoTitle}>{title}</p>
      {instaId && (
        <p className={styles.infoText}>
          인스타그램 ID - <span className={styles.info}>{instaId}</span>
        </p>
      )}
      <p className={styles.infoText}>
        전화번호 - <span className={styles.info}>{phoneNumber}</span>
      </p>
    </div>
  );
};

export default UserInfo;
