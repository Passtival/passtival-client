import { useEffect } from 'react';

export const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;

    const prevStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevStyle || 'unset';
    };
  }, [locked]);
};
