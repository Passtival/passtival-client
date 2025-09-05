import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 'clamp(10rem, 10vh, 10rem)',
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
        bottom: '3.4rem',
      },
      goToHome: {
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '4rem',
      },
    },
  },
});
