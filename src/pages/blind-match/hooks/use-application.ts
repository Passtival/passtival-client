import { useEffect, useState } from 'react';

type ViewState = 'entry' | 'complete' | 'closed' | 'results';

export const useApplication = (currentDay: string) => {
  const [viewState, setViewState] = useState<ViewState>('entry');
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (currentDay === '1일차 매칭') {
      setHasApplied(true);
    } else {
      setHasApplied(false);
    }

    const checkStatus = () => {
      const now = new Date();
      const deadline = new Date();
      const resultsTime = new Date();

      if (currentDay === '1일차 매칭') {
        deadline.setFullYear(2025, 8, 3);
        resultsTime.setFullYear(2025, 8, 3);
      } else if (currentDay === '2일차 매칭') {
        deadline.setFullYear(2025, 8, 4);
        resultsTime.setFullYear(2025, 8, 4);
      } else if (currentDay === '3일차 매칭') {
        deadline.setFullYear(2025, 8, 1);
        resultsTime.setFullYear(2025, 8, 1);
      }

      deadline.setHours(17, 30, 0, 0);
      resultsTime.setHours(18, 0, 0, 0);

      if (now.getTime() >= resultsTime.getTime()) {
        setViewState('results');
      } else if (now.getTime() > deadline.getTime()) {
        setViewState('closed');
      } else {
        setViewState('entry');
      }
    };

    checkStatus();
  }, [currentDay]);

  const handleApplicationComplete = () => {
    setViewState('complete');
    setHasApplied(true);
  };

  return { viewState, handleApplicationComplete, hasApplied };
};
