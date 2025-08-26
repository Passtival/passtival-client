//import * as style from './booth-detail-item.css';

//import React from "react";

export type BoothCategory = 'menu' | 'experience';

type BaseProps = {
  itemName: string;
  itemInfo?: string;
  className?: string;
};

type MenuProps = BaseProps & {
  category: 'menu';
  price: number | string;
};

type ExperienceProps = BaseProps & {
  category: 'experience';
  price?: never;
};

export type BoothDetailItemProps = MenuProps | ExperienceProps;

const formatPrice = (p: number | string) =>
  typeof p === 'number' ? p.toLocaleString('ko-KR') : p;

export default function BoothDetailItem(props: BoothDetailItemProps) {
  const { itemName, itemInfo, className } = props;
  const isMenu = props.category === 'menu';

  return (
    <article
      className={className}
      aria-label="부스 상세 아이템"
    >
      <div className="booth-detail-item rounded-xl border bg-white p-5">
        <h3 className="title text-2xl font-extrabold">{itemName}</h3>

        {isMenu && (
          <div className="price mt-1 text-lg font-bold">
            {formatPrice(props.price)} 원
          </div>
        )}

        {itemInfo && (
          <p className="info mt-2 text-slate-500 leading-relaxed">{itemInfo}</p>
        )}
      </div>
    </article>
  );
}
