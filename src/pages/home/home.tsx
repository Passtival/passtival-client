import { Tab, TabList, Tabs } from '@shared/components/tab/tab';
import { TabPanel, TabPanels } from '@shared/components/tab/tab-panel';

const tabData = [
  { title: '부스 정보', content: '부스요' },
  { title: '메뉴', content: '메뉴 입니다' },
  { title: '체험 활동', content: '키자니아' },
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs>
        <TabList>
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              index={index}
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabData.map((tab, index) => (
            <TabPanel
              key={index}
              tab={index}
            >
              <div>{tab.content}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
