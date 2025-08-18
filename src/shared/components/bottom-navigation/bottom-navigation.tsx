import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  IcSvgMain,
  IcSvgBooth,
  IcSvgMatch,
  IcSvgLostfind,
  IcSvgEntry,
} from '@shared/icons';

import { navBar, navList, navLinkRecipe } from './bottom-navigation.css';

const navItems = [
  { path: '/', label: '홈', icon: IcSvgMain },
  { path: '/booth', label: '부스정보', icon: IcSvgBooth },
  { path: '/land', label: '번호팅', icon: IcSvgMatch },
  { path: '/lost-items', label: '분실물', icon: IcSvgLostfind },
  { path: '/ticket', label: '응모권', icon: IcSvgEntry },
];

const BottomNavigation: React.FC = () => {
  return (
    <nav className={navBar}>
      <ul className={navList}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => navLinkRecipe({ isActive })}
            >
              <item.icon
                width={24}
                height={24}
              />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
