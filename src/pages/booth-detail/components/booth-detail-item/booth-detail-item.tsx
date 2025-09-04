import Thumbnail from '@shared/components/Thumbnail/Thumbnail';

import * as style from './booth-detail-item.css';

interface BoothDetailItemProps {
  name: string;
  info: string;
  imgSrc: string;
  alt: string;
  price?: number | string;
}

const BoothDetailItem = ({
  name,
  info,
  imgSrc,
  alt,
  price,
}: BoothDetailItemProps) => {
  return (
    <article
      aria-label="부스 상세 아이템"
      className={style.boothDetailItem}
    >
      <div className={style.boothText}>
        <div className={style.boothName}>{name}</div>
        {price && <div className={style.boothPrice}>{price} 원</div>}
        <p className={style.boothInfo}>{info}</p>
      </div>
      <div>
        <Thumbnail
          src={imgSrc}
          type="square_sm"
          alt={alt}
        />
      </div>
    </article>
  );
};

export default BoothDetailItem;
