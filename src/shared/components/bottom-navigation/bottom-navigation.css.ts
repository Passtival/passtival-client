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
    color: themeVars.color.bg_white,
    transition: 'all 0.3s ease',
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.main_yellow,
      },
    },
  },
});

export const navBar = style({
  position: 'fixed',
  display: 'flex',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: themeVars.zIndex.modal,

  width: '34.3rem',
  height: '7.4rem',
  bottom: '3rem',
  borderRadius: '50px',

  backgroundColor: themeVars.color.gray_500_40,
  boxShadow:
    '1px 1px 3.4px 1px rgba(255, 255, 255, 0.38) inset, 2px 2px 5px 0 rgba(93, 93, 93, 0.20)',
  backdropFilter: 'blur(11.3px)',
});

export const navList = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 3.2rem',
  width: '100%',
});
