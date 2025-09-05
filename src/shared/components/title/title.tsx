import * as styles from './title.css';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title = ({ mainTitle, subTitle }: TitleProps) => {
  return (
    <>
      <p className={styles.mainTitle}>{mainTitle}</p>
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
    </>
  );
};

export default Title;
