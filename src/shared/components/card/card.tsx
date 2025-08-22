import type { ReactNode, MouseEvent } from 'react';

import * as styles from './card.css';
import { useCard, CardContext } from './hooks/use-card';

interface CardProps {
  children: ReactNode;
  size?: 'sm' | 'lg';
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

interface ChildProps {
  children: ReactNode;
}

interface ImageProps {
  src: string;
}

const Container = ({ children, onClick, size = 'sm' }: CardProps) => {
  return (
    <CardContext.Provider value={{ size }}>
      <div
        className={styles.card({ size })}
        onClick={onClick}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

const Content = ({ children }: ChildProps) => {
  return <div className={styles.contentContainer}>{children}</div>;
};

const Title = ({ children }: ChildProps) => {
  const { size } = useCard();
  const titleClassName = size === 'lg' ? styles.titlelg : styles.titlesm;

  return <p className={titleClassName}>{children}</p>;
};

const Major = ({ children }: ChildProps) => {
  return <p className={styles.major}>{children}</p>;
};

const MajortTxt = ({ children }: ChildProps) => {
  return <p className={styles.majortxt}>{children}</p>;
};

const LostTxt = ({ children }: ChildProps) => {
  return <p className={styles.losttxt}>{children}</p>;
};

const Img = ({ src }: ImageProps) => {
  return (
    <img
      className={styles.img}
      src={src}
    />
  );
};

const Card = {
  Container,
  Content,
  Title,
  Major,
  MajortTxt,
  LostTxt,
  Img,
};
export default Card;
