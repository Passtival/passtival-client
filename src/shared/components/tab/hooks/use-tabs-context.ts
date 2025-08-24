import { createContext, useContext } from 'react';

type ContainerContextType = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export const TabsContext = createContext<ContainerContextType | null>(null);

export const useTabsContext = () => {
  const tabContext = useContext(TabsContext);
  if (!tabContext) {
    throw new Error('Tab.Container 안에 tabContext를 사용하세요.');
  }
  return tabContext;
};
