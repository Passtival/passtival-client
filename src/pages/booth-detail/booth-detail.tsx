import { useParams } from 'react-router-dom';

import ActivitiesInfo from '@pages/booth-detail/components/activity-info';
import BoothInfo from '@pages/booth-detail/components/booth-info';
import MenuInfo from '@pages/booth-detail/components/menu-info';

import Tab from '@shared/components/tab/tab';
import TopNavigation from '@shared/components/top-navigation/top-navigation';

const BoothDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('부스 ID가 없습니다.');
  }

  return (
    <>
      <TopNavigation title="부스 상세 정보" />

      <Tab.Container initialValue="booth-info">
        <Tab.List>
          <Tab.Item value="booth-info">부스 정보</Tab.Item>
          <Tab.Item value="menu">메뉴</Tab.Item>
          <Tab.Item value="activities">체험 활동</Tab.Item>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel value="booth-info">
            <BoothInfo id={id} />
          </Tab.Panel>
          <Tab.Panel value="menu">
            <MenuInfo id={id} />
          </Tab.Panel>
          <Tab.Panel value="activities">
            <ActivitiesInfo id={id} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default BoothDetailPage;
