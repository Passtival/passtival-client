import { useEffect, useState } from 'react';

type ViewState = 'entry' | 'complete' | 'closed' | 'results';

export const useApplication = (currentDay: string) => {
  const [viewState, setViewState] = useState<ViewState>('entry');
  const [hasApplied, setHasApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (currentDay === '1일차 매칭') {
      setHasApplied(true);
      setIsSuccess(false);
    } else if (currentDay === '2일차 매칭') {
      setHasApplied(true);
      setIsSuccess(true);
    } else {
      setHasApplied(false);
      setIsSuccess(false);
    }

    const checkStatus = () => {
      const now = new Date();
      const deadline = new Date();
      const resultsTime = new Date();

      if (currentDay === '1일차 매칭') {
        deadline.setFullYear(2025, 8, 23);
        resultsTime.setFullYear(2025, 8, 23);
      } else if (currentDay === '2일차 매칭') {
        deadline.setFullYear(2025, 8, 24);
        resultsTime.setFullYear(2025, 8, 24);
      } else if (currentDay === '3일차 매칭') {
        deadline.setFullYear(2025, 8, 25);
        resultsTime.setFullYear(2025, 8, 25);
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
    setIsSuccess(false);
  };

  return { viewState, handleApplicationComplete, hasApplied, isSuccess };
};
