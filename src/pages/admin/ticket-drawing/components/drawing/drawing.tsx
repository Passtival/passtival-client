import { useState } from 'react';

import Title from '@shared/components/title/title';

import * as styles from './drawing.css';
import InfoSection from '../info-section/info-section';

const Drawing = () => {
  const [winners, setWinners] = useState<{ name: string; number: string }[]>(
    [],
  );

  const mockWinners = [
    { name: '홍길동', number: '20230001' },
    { name: '김철수', number: '20230002' },
    { name: '이영희', number: '20230003' },
    { name: '박민준', number: '20230004' },
  ];

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * mockWinners.length);
    const randomWinner = mockWinners[randomIndex];

    setWinners((prevWinners) => [...prevWinners, randomWinner]);
  };

  const handleReDrawButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * mockWinners.length);
    const newWinner = mockWinners[randomIndex];

    setWinners((prevWinners) => {
      const updatedWinners = [...prevWinners];
      updatedWinners[updatedWinners.length - 1] = newWinner;
      return updatedWinners;
    });
  };

  return (
    <>
      <div className={styles.title}>
        <Title
          mainTitle="당첨자 추첨"
          subTitle="응모권 당첨자 페이지입니다."
        />
      </div>
      {winners.map((winner, index) => (
        <div
          key={index}
          className={styles.container}
        >
          <p className={styles.text}>당첨자 {index + 1}</p>
          <InfoSection
            value={winner.name}
            studentnumber={winner.number}
            handleButtonClick={handleReDrawButtonClick}
          />
        </div>
      ))}

      <div className={styles.container}>
        <p className={styles.text}>당첨자 {winners.length + 1}</p>
        <InfoSection
          value=""
          studentnumber=""
          handleButtonClick={handleButtonClick}
        />
      </div>
    </>
  );
};

export default Drawing;
