import type { ReactNode, MouseEvent } from 'react';
import { createContext } from 'react';

import * as style from './card.css';

const CardContext = createContext({});

interface CardProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

interface ChildProps {
  children: ReactNode;
}

interface ImageProps {
  src: string;
}

const Card = ({ children, onClick }: CardProps) => {
  const state = {};

  return (
    <CardContext.Provider value={state}>
      {/* 1. div에 onClick 핸들러를 추가합니다. */}
      {/* 2. 클릭 가능한 요소임을 나타내기 위해 커서를 pointer로 변경합니다. */}
      <div
        className={style.card}
        onClick={onClick}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

Card.Title = ({ children }: ChildProps) => {
  return <p className={style.title}>{children}</p>;
};

Card.Major = ({ children }: ChildProps) => {
  return <p className={style.major}>{children}</p>;
};

Card.MajortTxt = ({ children }: ChildProps) => {
  return <p className={style.majortxt}>{children}</p>;
};

Card.lostTxt = ({ children }: ChildProps) => {
  return <p className={style.losttxt}>{children}</p>;
};

Card.Image = ({ src }: ImageProps) => {
  return (
    <img
      className={style.img}
      src={src}
    />
  );
};

export default Card;
