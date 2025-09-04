import { useParams } from 'react-router-dom';

import Tab from '@shared/components/tab/tab';

import ApplyPage from './components/apply/apply';

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
            <ApplyPage currentDay="1일차 매칭" />
          </Tab.Panel>
          <Tab.Panel value="day-2">
            <ApplyPage currentDay="2일차 매칭" />
          </Tab.Panel>
          <Tab.Panel value="day-3">
            <ApplyPage currentDay="3일차 매칭" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default BlindMatch;
