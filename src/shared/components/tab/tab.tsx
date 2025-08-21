import type { ReactNode } from 'react';

import { useTabsContext } from './hooks/use-tabs-context';
import { TabsProvider } from './tab-provider';
import * as styles from './tab.css';
import { buttonVariants } from './tab.css';

interface TabProps {
  children: ReactNode;
  index: number;
  onChange?: (isselected: boolean) => void;
}
interface TabsProps {
  children: ReactNode;
}

const TabList = ({ children }: { children: ReactNode }) => {
  return (
    <div
      role="tablist"
      className={styles.tablist}
    >
      {children}
    </div>
  );
};

const Tab = ({ children, index }: TabProps) => {
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

const Tabs = ({ children }: TabsProps) => {
  return <TabsProvider>{children}</TabsProvider>;
};

export { Tabs, TabList, Tab };
