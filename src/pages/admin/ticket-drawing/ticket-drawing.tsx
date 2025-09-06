import Tab from '@shared/components/tab/tab';

import DrawingComponent from './drawing-component';

const BlindMatch = () => {
  const initialDay = '1';

  return (
    <>
      <Tab.Container initialValue={initialDay}>
        <Tab.List>
          <Tab.Item value="1">1일차</Tab.Item>
          <Tab.Item value="2">2일차</Tab.Item>
          <Tab.Item value="3">3일차</Tab.Item>
          <Tab.Item value="4">Premium</Tab.Item>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel value="1">
            <DrawingComponent currentDay="1일차" />
          </Tab.Panel>
          <Tab.Panel value="2">
            <DrawingComponent currentDay="2일차" />
          </Tab.Panel>
          <Tab.Panel value="3">
            <DrawingComponent currentDay="3일차" />
          </Tab.Panel>
          <Tab.Panel value="4">
            <DrawingComponent currentDay="Premium" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default BlindMatch;
