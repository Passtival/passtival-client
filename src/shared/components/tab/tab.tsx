import type { ReactNode } from 'react';

import { useTabsContext } from './hooks/use-tabs-context';
import { TabsProvider } from './tab-provider';

interface TabProps {
  children: ReactNode;
  index: number;
}
interface TabsProps {
  children: ReactNode;
}

const TabList = ({ children }: { children: ReactNode }) => {
  return <div role="tablist">{children}</div>;
};

const Tab = ({ children, index }: TabProps) => {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isActive = selectedTab === index;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setSelectedTab(index)}
    >
      {children}
    </button>
  );
};

const Tabs = ({ children }: TabsProps) => {
  return <TabsProvider>{children}</TabsProvider>;
};

export { Tabs, TabList, Tab };
