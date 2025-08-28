import * as style from './booth-detail-item.css';
import Thumbnail from '../Thumbnail/Thumbnail';

interface BoothDetailItemProps {
  itemName: string;
  itemInfo: string;
  itemImg: string;
  itemAlt: string;
  price?: number | string;
}

const BoothDetailItem = ({
  itemName,
  itemInfo,
  itemImg,
  itemAlt,
  price,
}: BoothDetailItemProps) => {
  const hasPrice = price !== undefined && price !== null && price !== '';

  return (
    <article
      aria-label="부스 상세 아이템"
      className={style.boothDetailItem}
    >
      <div className={style.boothText}>
        <div className={style.boothItemName}>{itemName}</div>

        {hasPrice && <div className={style.boothPrice}>{price} 원</div>}

        <p className={style.boothInfo}>{itemInfo}</p>
      </div>
      <div>
        <Thumbnail
          src={itemImg}
          type="square_sm"
          alt={itemAlt}
        />
      </div>
    </article>
  );
};

export default BoothDetailItem;
