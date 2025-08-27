import { Outlet } from 'react-router-dom';

import BottomNavigation from '@shared/components/bottom-navigation/bottom-navigation';

export default function MainLayout() {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}
