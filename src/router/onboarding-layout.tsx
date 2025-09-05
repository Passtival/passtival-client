import { Outlet } from 'react-router-dom';

import { onBoardingStyle } from '@shared/styles';

export default function OnBoardingLayout() {
  return (
    <div className={onBoardingStyle}>
      <Outlet />
    </div>
  );
}
