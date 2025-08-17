import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const navLinkRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    gap: '0.6rem',
    padding: '0.6rem 0.8rem 0.4rem 0.8rem',

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
  display: 'flex',
  left: '50%',
  transform: 'translateX(-50%)',

  width: '34.3rem',
  height: '7.4rem',
  bottom: '3rem',
  borderRadius: '50px',

  backgroundColor: themeVars.color.bg_white_70,
  boxShadow: '2px 2px 5px rgba(24, 118, 250, 0.20)',
});

export const navList = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 3.2rem',
  width: '100%',
});
