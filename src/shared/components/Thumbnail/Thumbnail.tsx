import * as styles from './Thumbnail.css';

interface ThumbnailProps {
  src?: string;
  alt?: string;
  type: 'square_sm' | 'square_md' | 'square_lg';
}

const NO_IMAGE_PLACEHOLDER = '/public/carousel1.jpg';

const Thumbnail = ({ src, alt, type }: ThumbnailProps) => {
  const imageSrc = src || NO_IMAGE_PLACEHOLDER;

  const imageAlt = alt || '썸네일 이미지';

  return (
    <div className={styles.container}>
      <img
        className={styles.img({ type })}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default Thumbnail;
