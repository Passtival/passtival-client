import Lottie from 'lottie-react';

import * as styles from './loading.css';
import loadingAnimation from '../../assets/lottie/lodding.json';

const CONTENT = {
  TITLE: 'Loading...',
};

const LoadingPage = () => {
  const modifiedAnimationData = {
    ...loadingAnimation,
    assets: loadingAnimation.assets.map((asset) => ({
      asset,
      u: '',
    })),
  };
  return (
    <div className={styles.container}>
      <Lottie
        loop
        animationData={modifiedAnimationData}
        autoPlay
        style={{
          width: '20.5rem',
          height: '20.5rem',
        }}
      />
      <p className={styles.title}>{CONTENT.TITLE}</p>
    </div>
  );
};

export default LoadingPage;
