import { useEffect, useState } from 'react';

import Closed from '../closed/closed.tsx';
import Complete from '../complete/complete.tsx';
import EntryForm from '../entry/entry.tsx';

interface EntryPageProps {
  currentDay: string;
}

const EntryPage = ({ currentDay }: EntryPageProps) => {
  const [viewState, setViewState] = useState<'entry' | 'complete' | 'closed'>(
    'entry',
  );

  useEffect(() => {
    const checkDeadline = () => {
      const now = new Date();
      const deadline = new Date();
      deadline.setFullYear(2025, 8, 22);
      deadline.setHours(17, 30, 0, 0);

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

  switch (viewState) {
    case 'complete':
      return <Complete currentDay={currentDay} />;
    case 'closed':
      return <Closed currentDay={currentDay} />;
    case 'entry':
      return (
        <EntryForm
          currentDay={currentDay}
          onApplicationComplete={handleApplicationComplete}
        />
      );
  }
};

export default EntryPage;
