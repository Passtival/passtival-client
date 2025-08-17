import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  IcSvgMain,
  IcSvgBooth,
  IcSvgMatch,
  IcSvgLostfind,
  IcSvgEntry,
} from '@shared/icons';

import {
  navBar,
  navList,
  navItem,
  navIcon,
  navLinkRecipe,
} from './bottom-navigation.css';

const BottomNavigation: React.FC = () => {
  return (
    <nav className={navBar}>
      <ul className={navList}>
        <li className={navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => navLinkRecipe({ isActive })}
          >
            <IcSvgMain
              className={navIcon}
              width={24}
              height={24}
            />
            <span>홈</span>
          </NavLink>

          <NavLink
            to="/booth"
            className={({ isActive }) => navLinkRecipe({ isActive })}
          >
            <IcSvgBooth
              className={navIcon}
              width={24}
              height={24}
            />
            <span>부스정보</span>
          </NavLink>

          <NavLink
            to="/land"
            className={({ isActive }) => navLinkRecipe({ isActive })}
          >
            <IcSvgMatch
              className={navIcon}
              width={24}
              height={24}
            />
            <span>번호팅</span>
          </NavLink>

          <NavLink
            to="/lost-items"
            className={({ isActive }) => navLinkRecipe({ isActive })}
          >
            <IcSvgLostfind
              className={navIcon}
              width={24}
              height={24}
            />
            <span>분실물</span>
          </NavLink>

          <NavLink
            to="/ticket"
            className={({ isActive }) => navLinkRecipe({ isActive })}
          >
            <IcSvgEntry
              className={navIcon}
              width={24}
              height={24}
            />
            <span>응모권</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
