import type { ReactNode } from 'react';

import { useScrollLock } from '@shared/components/modal/hooks/use-scroll-lock';

import * as styles from './modal.css';

interface ContainerProps {
  children: ReactNode;
  open: boolean;
}

interface ContentProps {
  children: ReactNode;
}

interface BodyProps {
  children: ReactNode;
}

interface TitleProps {
  children: ReactNode;
}

interface SummaryProps {
  children: ReactNode;
}

interface InfoSectionProps {
  children: ReactNode;
}

interface InfoProps {
  label: string;
  value: string;
}

interface DescriptionProps {
  children: ReactNode;
}

interface FooterProps {
  children: ReactNode;
}

interface CloseProps {
  children: ReactNode;
  onClick: () => void;
}

interface ActionProps {
  children: ReactNode;
  onClick: () => void;
}

const Container = ({ children, open }: ContainerProps) => {
  useScrollLock(open);
  return <div className={styles.container({ open })}>{children}</div>;
};

const Content = ({ children }: ContentProps) => {
  return <div className={styles.content}>{children}</div>;
};

const Body = ({ children }: BodyProps) => {
  return <div className={styles.body}>{children}</div>;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

const Summary = ({ children }: SummaryProps) => {
  return <section className={styles.summary}>{children}</section>;
};

const InfoSection = ({ children }: InfoSectionProps) => {
  return <section className={styles.infoSection}>{children}</section>;
};

const Info = ({ label, value }: InfoProps) => {
  return (
    <p className={styles.modalBodyText}>
      {label} - {value}
    </p>
  );
};

const Description = ({ children }: DescriptionProps) => {
  return <p className={styles.modalBodyText}>{children}</p>;
};

const Footer = ({ children }: FooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};

const Close = ({ children, onClick }: CloseProps) => {
  return (
    <button
      className={styles.closeButton}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Action = ({ children, onClick }: ActionProps) => {
  return (
    <button
      className={styles.actionButton}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Modal = {
  Container,
  Content,
  Body,
  Title,
  Summary,
  InfoSection,
  Info,
  Description,
  Footer,
  Close,
  Action,
};

export default Modal;
