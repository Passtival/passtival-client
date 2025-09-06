import Button from '@shared/components/button/button';

import * as styles from './drawing-component.css';

const DrawingComponent = () => {
  const handleButtonClick = () => {
    console.log('응모권 추첨 버튼이 클릭되었습니다!');
  };
  return (
    <>
      <p className={styles.text}>응모권 추첨</p>
      <div className={styles.container}>
        <Button onClick={handleButtonClick}>응모권 추첨</Button>
      </div>
    </>
  );
};

export default DrawingComponent;
