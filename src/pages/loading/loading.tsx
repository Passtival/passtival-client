import Loading from '@shared/components/loading/loading';

import * as styles from './loading.css';

const CONTENT = {
  TITLE: 'Loading...',
};

const LoadingPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Loading
        size="large"
        message={CONTENT.TITLE}
      />
    </div>
  );
};

export default LoadingPage;
