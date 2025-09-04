import * as styles from './Thumbnail.css';

interface ThumbnailProps {
  src?: string;
  alt?: string;
  type: 'square_sm' | 'square_md' | 'square_lg';
}
const Thumbnail = ({ src, alt, type }: ThumbnailProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img({ type })}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Thumbnail;
