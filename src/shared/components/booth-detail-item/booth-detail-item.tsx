import * as style from './booth-detail-item.css';

export type BoothCategory = 'menu' | 'active';

type BaseProps = {
  itemName: string;
  itemInfo: string;
  itemImg: string;
};

type MenuProps = BaseProps & {
  category: 'menu';
  price: number | string;
};

type ActiveProps = BaseProps & {
  category: 'active';
  price?: never;
};

export type BoothDetailItemProps = MenuProps | ActiveProps;

const formatPrice = (p: number | string) =>
  typeof p === 'number' ? p.toLocaleString('ko-KR') : p;

export default function BoothDetailItem(props: BoothDetailItemProps) {
  const { itemName, itemInfo, itemImg } = props;
  const isMenu = props.category === 'menu';

  return (
    <article
      aria-label="부스 상세 아이템"
      className={style.boothDetailItem}
    >
      <div className={style.boothText}>
        <div className={style.boothItemName}>{itemName}</div>

        {isMenu && (
          <div className={style.boothPrice}>{formatPrice(props.price)} 원</div>
        )}

        <p className={style.boothInfo}>{itemInfo}</p>
      </div>
      <img
        className={style.boothImg}
        src={itemImg}
        width={100}
        height={100}
      />
    </article>
  );
}
