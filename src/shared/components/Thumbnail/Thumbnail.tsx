import { IcSvgImage } from '@shared/icons';

import * as styles from './Thumbnail.css';

interface ThumbnailProps {
  src?: string;
  alt?: string;
  type: 'square_sm' | 'square_md' | 'square_lg';
}

const Thumbnail = ({ src, alt, type }: ThumbnailProps) => {
  return (
    <div className={styles.container}>
      {src ? (
        <img
          className={styles.img({ type })}
          src={src}
          alt={alt}
        />
      ) : (
        <div className={styles.img({ type, hasImage: false })}>
          <IcSvgImage
            width="3.2rem"
            height="3.2rem"
          />
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
