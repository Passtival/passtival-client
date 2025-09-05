import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 'calc(100vh - 30rem)',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  textAlign: 'center',
});

export const content = style({
  ...themeVars.fontStyles.body_b_13,
  color: themeVars.color.bg_white,
});

export const highlight = style({
  ...themeVars.fontStyles.body_b_13,
  color: themeVars.color.main_yellow,
});

export const buttonWrapper = recipe({
  base: {
    position: 'fixed',
  },
  variants: {
    step: {
      next: {
        right: '2.4rem',
        bottom: '6.4rem',
      },
      goToHome: {
        left: '5.5rem',
        bottom: '4.7rem',
      },
    },
  },
});
