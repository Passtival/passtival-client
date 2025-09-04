import { useApplication } from '@pages/blind-match/hooks/use-application.ts';

import Closed from '../apply-after/closed.tsx';
import Complete from '../complete/complete.tsx';
import EntryForm from '../entry/entry.tsx';

interface EntryPageProps {
  currentDay: string;
}

const ApplyPage = ({ currentDay }: EntryPageProps) => {
  const { viewState, handleApplicationComplete } = useApplication(currentDay);

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

export default ApplyPage;
