import * as styles from './image.css';

interface ImageProps {
  img: string;
  alt?: string;
  type: 'square_sm' | 'square_lg' | 'circle';
}
const Image = ({ img, alt, type }: ImageProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img({ type })}
        src={img}
        alt={alt}
      />
    </div>
  );
};

export default Image;
