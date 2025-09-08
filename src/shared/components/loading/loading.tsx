import Lottie from 'lottie-react';

import * as styles from './loading.css';
import loadingAnimation from '../../../assets/lottie/lodding.json';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  className?: string;
}

const Loading = ({
  size = 'medium',
  message = 'Loading...',
  ...props
}: LoadingProps) => {
  const modifiedAnimationData = {
    ...loadingAnimation,
    assets: loadingAnimation.assets.map((asset) => ({
      asset,
      u: '',
    })),
  };

  return (
    <div
      className={styles.container}
      {...props}
    >
      <Lottie
        loop
        animationData={modifiedAnimationData}
        autoPlay
        className={styles.lottieVariants({ size })}
      />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Loading;
