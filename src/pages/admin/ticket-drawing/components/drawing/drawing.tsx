import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

import InfoSection from '@pages/admin/ticket-drawing/components/info-section/info-section';
import type { WinnerData } from '@pages/admin/ticket-drawing/types/winner-data';

import Title from '@shared/components/title/title';

import * as styles from './drawing.css';
import confetiLottieAnimation from '../../../../../assets/lottie/confeti.json';

interface DrawingProps {
  winner: WinnerData | null;
  onReExecuteRaffle: () => void;
}

const Drawing = ({ winner, onReExecuteRaffle }: DrawingProps) => {
  const [isConfetiPlaying, setIsConfetiPlaying] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const animationData = confetiLottieAnimation;

  useEffect(() => {
    if (winner) {
      setIsConfetiPlaying(false);
      setAnimationKey((prev) => prev + 1);

      setTimeout(() => {
        setIsConfetiPlaying(true);
      }, 100);
    }
  }, [winner]);

  const handleReExecuteRaffle = () => {
    setIsConfetiPlaying(false);
    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      setIsConfetiPlaying(true);
    }, 100);

    onReExecuteRaffle();
  };

  return (
    <>
      <div className={styles.title}>
        <Title
          mainTitle="당첨자 추첨"
          subTitle="응모권 당첨자 페이지입니다."
        />
      </div>
      <>
        <div className={styles.container}>
          <p className={styles.text}>당첨자</p>
          <InfoSection
            value={winner?.name || ''}
            studentnumber={winner?.studentId || ''}
            handleButtonClick={handleReExecuteRaffle}
          />
        </div>
        <div className={styles.confetiLottie}>
          {isConfetiPlaying && (
            <Lottie
              key={animationKey}
              animationData={animationData}
              autoPlay={true}
              loop={false}
            />
          )}
        </div>
      </>
    </>
  );
};

export default Drawing;
