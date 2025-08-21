import { useState } from 'react';
import type { ReactNode } from 'react';

import { TabsContext } from './tab-context';

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const value = {
    selectedTab,
    setSelectedTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
