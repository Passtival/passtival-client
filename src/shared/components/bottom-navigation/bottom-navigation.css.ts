import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const navLinkRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',

    ...themeVars.fontStyles.button_r_12,
    color: themeVars.color.gray_900,
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.main_blue,
      },
    },
  },
});

export const navBar = style({
  position: 'fixed',
  bottom: '3rem',
  width: '34.3rem',
  backgroundColor: themeVars.color.bg_white_70,
  height: '7.4rem',
  borderRadius: '50px',
  boxShadow: '2px 2px 5px rgba(24, 118, 250, 0.20)',
});
export const navList = style({});
export const navItem = style({});

export const navIcon = style({
  marginBottom: '0.6rem',
});
