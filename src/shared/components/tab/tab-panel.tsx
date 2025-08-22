import type { ReactNode } from 'react';

import { useTabsContext } from './hooks/use-tabs-context';

export const TabPanelsProps = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

interface TabPanelProps {
  children: ReactNode;
  tab: number;
}

export const TabPanel = ({ children, tab }: TabPanelProps) => {
  const { selectedTab } = useTabsContext();
  const isActive = selectedTab === tab;

  if (!isActive) {
    return null;
  }

  return <div role="tabpanel">{children}</div>;
};
