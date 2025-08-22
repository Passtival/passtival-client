import Tab from '@shared/components/tab/tab';

const tabData = [
  { id: 1, content: '부스' },
  { id: 2, content: '메뉴' },
  { id: 3, content: '체험 활동' },
];

const Home = () => {
  return (
    <Tab.Container defaultValue={1}>
      <Tab.List>
        {tabData.map((tab) => (
          <Tab.Item
            key={tab.id}
            index={tab.id}
          >
            {tab.content}
          </Tab.Item>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabData.map((tab) => (
          <Tab.Panel
            key={tab.id}
            tab={tab.id}
          >
            <div>{tab.content}</div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Container>
  );
};

export default Home;
