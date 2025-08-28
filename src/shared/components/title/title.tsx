import * as styles from './title.css';

interface TitleProps {
  mainTitle: string;
  mainTitleStyle: 'tb18' | 'tb20' | 'tb22';
  subTitle?: string;
  subTitleStyle?: 'cm12';
}

const Title = ({
  mainTitle,
  mainTitleStyle,
  subTitle,
  subTitleStyle,
}: TitleProps) => {
  return (
    <div>
      <p className={styles.titleStyle({ type: mainTitleStyle })}>{mainTitle}</p>
      {subTitle && (
        <p className={styles.titleStyle({ type: subTitleStyle })}>{subTitle}</p>
      )}
    </div>
  );
};

export default Title;
