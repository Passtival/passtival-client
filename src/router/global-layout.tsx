import { Suspense } from 'react';
import { Outlet } from 'react-router';

import BottomNavigation from '@shared/components/bottom-navigation/bottom-navigation';

export default function GlobalLayout() {
  return (
    <Suspense>
      <Outlet />
      <BottomNavigation />
    </Suspense>
  );
}
