import * as styles from './detail-img.css';

interface DeatilImgProps {
  img: string;
  alt?: string;
}
const DetailImg = ({ img, alt }: DeatilImgProps) => {
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
