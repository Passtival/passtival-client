import { useContext } from 'react';

import { TabsContext } from '../tab-context';

export const useTabsContext = () => {
  const tabContext = useContext(TabsContext);
  if (!tabContext) {
    throw new Error('tabContext를 사용해주세요.');
  }
  return tabContext;
};
