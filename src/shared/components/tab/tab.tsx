import { useState } from 'react';
import type { ReactNode } from 'react';

import { useTabsContext, TabsContext } from './hooks/use-tabs-context';
import * as styles from './tab.css';
import { buttonVariants } from './tab.css';

interface TabsProps {
  children: ReactNode;
}
interface TabItemProps {
  children: ReactNode;
  index: number;
}
interface TabPaneslProps {
  children: ReactNode;
  tab: number;
}

const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const value = {
    selectedTab,
    setSelectedTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const Container = ({ children }: { children: ReactNode }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

const List = ({ children }: TabsProps) => {
  return (
    <div
      role="tablist"
      className={styles.tablist}
    >
      {children}
    </div>
  );
};

const Item = ({ children, index }: TabItemProps) => {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isActive = selectedTab === index;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setSelectedTab(index)}
      className={buttonVariants({ selected: isActive })}
    >
      {children}
    </button>
  );
};

const Panels = ({ children }: TabsProps) => {
  return <div>{children}</div>;
};

const Panel = ({ children, tab }: TabPaneslProps) => {
  const { selectedTab } = useTabsContext();
  const isActive = selectedTab === tab;

  if (!isActive) {
    return null;
  }

  return <div role="tabpanel">{children}</div>;
};

const Tab = {
  Container,
  List,
  Item,
  Panels,
  Panel,
};

export default Tab;
