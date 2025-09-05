import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import { rootStyle, noBackgroundColor } from '@shared/styles';

import { routePath } from './path';

export default function GlobalLayout() {
  const { pathname } = useLocation();

  const isLogin = pathname === routePath.LOGIN;

  return (
    <div className={isLogin ? noBackgroundColor : rootStyle}>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
