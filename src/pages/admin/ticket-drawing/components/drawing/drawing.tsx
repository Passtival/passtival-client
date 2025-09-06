import Title from '@shared/components/title/title';

import * as styles from './drawing.css';

const Drawing = () => {
  return (
    <>
      <div className={styles.title}>
        <Title
          mainTitle="당첨자 추첨"
          subTitle="응모권 당첨자 페이지입니다."
        />
      </div>
    </>
  );
};
export default Drawing;
