import { Tab } from '@shared/components/tab/tab';

const tabData = [
  { id: 1, content: '부스' },
  { id: 2, content: '메뉴' },
  { id: 3, content: '체험 활동' },
];

const Home = () => {
  return (
    <Tab defaultValue={tabData[0].content}>
      <Tab.List>
        {tabData.map((id, content) => (
          <Tab.Item key={id}>{content}</Tab.Item>
        ))}
      </Tab.List>
      {tabData.map((tab) => (
        <Tab.Panel
          key={tab.id}
          tab={tab.id}
        >
          <div>{tab.content}</div>
        </Tab.Panel>
      ))}
    </Tab>
  );
};

export default Home;
