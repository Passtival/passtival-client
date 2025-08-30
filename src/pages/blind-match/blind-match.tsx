import { useParams } from 'react-router-dom';

import Tab from '@shared/components/tab/tab';

import EntryPage from './components/entrypage/entry';

const BlindMatch = () => {
  const { day } = useParams<{ day: string }>();

  const initialDay = day || '1';

  return (
    <>
      <Tab.Container initialValue={`day-${initialDay}`}>
        <Tab.List>
          <Tab.Item value="day-1">1일차 매칭</Tab.Item>
          <Tab.Item value="day-2">2일차 매칭</Tab.Item>
          <Tab.Item value="day-3">3일차 매칭</Tab.Item>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel value="day-1">
            <EntryPage currentDay="1일차 매칭" />
          </Tab.Panel>
          <Tab.Panel value="day-2">
            <EntryPage currentDay="2일차 매칭" />
          </Tab.Panel>
          <Tab.Panel value="day-3">
            <EntryPage currentDay="3일차 매칭" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default BlindMatch;
