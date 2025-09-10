import * as styles from './title-info.css';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const TitlInfo = ({ mainTitle, subTitle }: TitleProps) => {
  return (
    <>
      <p className={styles.mainTitle}>{mainTitle}</p>
      <p className={styles.subTitle}>{subTitle}</p>
    </>
  );
};

export default TitlInfo;
