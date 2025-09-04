import { useApplication } from '@pages/blind-match/hooks/use-application.ts';

import Closed from '../apply-after/closed.tsx';
import Complete from '../apply-after/complete.tsx';
import EntryForm from '../entry/entry.tsx';
import Fail from '../result/fail.tsx';
import Success from '../result/success.tsx';

interface EntryPageProps {
  currentDay: string;
}

const ApplyPage = ({ currentDay }: EntryPageProps) => {
  const { viewState, handleApplicationComplete, hasApplied, isSuccess } =
    useApplication(currentDay);

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
    case 'results':
      if (hasApplied) {
        if (isSuccess) {
          return <Success currentDay={currentDay} />;
        } else {
          return <Fail currentDay={currentDay} />;
        }
      } else {
        return <Closed currentDay={currentDay} />;
      }
    default:
      return null;
  }
};

export default ApplyPage;
