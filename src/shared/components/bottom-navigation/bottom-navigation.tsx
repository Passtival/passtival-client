import { useEffect, useState } from 'react';
import { NavLink, matchPath } from 'react-router-dom';

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
  const [navBottom, setNavBottom] = useState('3rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const innerHeight = window.innerHeight;
        const keyboardHeight = innerHeight - viewportHeight;

        if (keyboardHeight > 0) {
          setNavBottom('-100px');
        } else {
          setNavBottom('3rem');
        }
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const isActiveNav = (path: string) => {
    if (path === routePath.HOME) {
      return !!matchPath(
        { path: routePath.HOME, end: true },
        location.pathname,
      );
    }

    if (path === routePath.TICKET_ONBOARDING) {
      return (
        matchPath(
          { path: routePath.TICKET_ONBOARDING, end: false },
          location.pathname,
        ) ||
        matchPath({ path: routePath.TICKET, end: false }, location.pathname)
      );
    }
    return !!matchPath({ path, end: false }, location.pathname);
  };

  return (
    <nav
      className={styles.navBar}
      style={{ bottom: navBottom }}
    >
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={() =>
                styles.navLinkRecipe({ isActive: !!isActiveNav(item.path) })
              }
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
