import { createContext } from 'react';

type TabsContextType = {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
};

export const TabsContext = createContext<TabsContextType | null>(null);
