import type { ReactNode } from 'react';

import { useTabsContext } from './hooks/use-tabs-context';
import { TabsProviderProps } from './tab-provider';
import * as styles from './tab.css';
import { buttonVariants } from './tab.css';

interface TabProps {
  children: ReactNode;
  index: number;
}
interface TabsProps {
  children: ReactNode;
}

const TabContainer = ({ children }: TabsProps) => {
  return <TabsProviderProps>{children}</TabsProviderProps>;
};

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

const TabItem = ({ children, index }: TabProps) => {
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

const Tab = {
  TabContainer,
  TabList,
  TabItem,
};

export default Tab;
