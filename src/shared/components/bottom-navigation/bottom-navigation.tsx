import { NavLink } from 'react-router-dom';

import { routePath } from '@router/path';

import {
  IcSvgMain,
  IcSvgBooth,
  IcSvgMatch,
  IcSvgLostfind,
  IcSvgEntry,
} from '@shared/icons';

import * as styles from './bottom-navigation.css';

const navItems = [
  { path: routePath.HOME, label: '홈', icon: IcSvgMain },
  { path: routePath.BOOTH, label: '부스정보', icon: IcSvgBooth },
  { path: routePath.BLIND_MATCH, label: '번호팅', icon: IcSvgMatch },
  { path: routePath.LOST_ITEMS, label: '분실물', icon: IcSvgLostfind },
  { path: routePath.TICKET_ONBOARDING, label: '응모권', icon: IcSvgEntry },
];

const BottomNavigation = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => styles.navLinkRecipe({ isActive })}
            >
              <item.icon
                width="2.4rem"
                height="2.4rem"
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
