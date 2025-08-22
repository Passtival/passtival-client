import { createContext, useContext } from 'react';

type TabsContextType = {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const tabContext = useContext(TabsContext);
  if (!tabContext) {
    throw new Error('Tab.Container 안에 tabContext를 사용하세요.');
  }
  return tabContext;
};
