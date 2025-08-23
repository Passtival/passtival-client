import * as styles from './detail-img.css';

interface DetailImgProps {
  img: string;
  alt?: string;
}
const DetailImg = ({ img, alt }: DetailImgProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={img}
        alt={alt}
      />
    </div>
  );
};

export default DetailImg;
