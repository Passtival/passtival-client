import * as styles from './detail-img.css';

interface DeatilImgProps {
  img: string;
}
const DetailImg = ({ img }: DeatilImgProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={img}
      />
    </div>
  );
};

export default DetailImg;
