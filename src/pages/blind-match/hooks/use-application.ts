import { useEffect, useState } from 'react';

type ViewState = 'entry' | 'complete' | 'closed';

export const useApplication = (currentDay: string) => {
  const [viewState, setViewState] = useState<ViewState>('entry');

  useEffect(() => {
    const checkDeadline = () => {
      const now = new Date();
      const deadline = new Date();

      if (currentDay === '1일차 매칭') {
        deadline.setFullYear(2025, 8, 1);
        deadline.setHours(17, 30, 0, 0);
      } else if (currentDay === '2일차 매칭') {
        deadline.setFullYear(2025, 8, 4);
        deadline.setHours(17, 30, 0, 0);
      } else if (currentDay === '3일차 매칭') {
        deadline.setFullYear(2025, 8, 5);
        deadline.setHours(17, 30, 0, 0);
      }

      if (now > deadline) {
        setViewState('closed');
      } else {
        setViewState('entry');
      }
    };

    checkDeadline();
  }, [currentDay]);

  const handleApplicationComplete = () => {
    setViewState('complete');
  };

  return { viewState, handleApplicationComplete };
};
