import Tab from '@shared/components/tab/tab';

import DrawingMain from './components/drawing-main/drawing-main';

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
            <DrawingMain currentDay="1일차" />
          </Tab.Panel>
          <Tab.Panel value="2">
            <DrawingMain currentDay="2일차" />
          </Tab.Panel>
          <Tab.Panel value="3">
            <DrawingMain currentDay="3일차" />
          </Tab.Panel>
          <Tab.Panel value="4">
            <DrawingMain currentDay="Premium" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default BlindMatch;
