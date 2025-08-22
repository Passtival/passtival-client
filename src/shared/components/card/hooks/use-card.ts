import { createContext, useContext } from 'react';

type CardSize = 'sm' | 'lg';

export const CardContext = createContext<{ size?: CardSize }>({});

export const useCard = () => {
  const { size } = useContext(CardContext);
  return { size };
};
