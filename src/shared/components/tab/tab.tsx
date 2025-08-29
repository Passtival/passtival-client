import { useState } from 'react';
import type { ReactNode } from 'react';

import { useTabsContext, TabsContext } from './hooks/use-tabs-context';
import * as styles from './tab.css';

interface TabContainerProps {
  children: ReactNode;
  initialValue?: string;
}

interface TabListProps {
  children: ReactNode;
}
interface TabItemProps {
  children: ReactNode;
  value: string;
}
interface PanelsProps {
  children: ReactNode;
}
interface PanelProps {
  children: ReactNode;
  value: string;
}

const Container = ({ children, initialValue = '' }: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  const value = {
    selectedTab,
    setSelectedTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const List = ({ children }: TabListProps) => {
  return (
    <div
      role="tablist"
      className={styles.container}
    >
      {children}
    </div>
  );
};

const Item = ({ children, value }: TabItemProps) => {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isActive = selectedTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setSelectedTab(value)}
      className={styles.buttonVariants({ selected: isActive })}
    >
      {children}
    </button>
  );
};

const Panels = ({ children }: PanelsProps) => {
  return <div>{children}</div>;
};

const Panel = ({ children, value }: PanelProps) => {
  const { selectedTab } = useTabsContext();
  const isActive = selectedTab === value;

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
