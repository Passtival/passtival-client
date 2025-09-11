import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  minHeight: '100dvh',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 'clamp(14rem, 10vh, 10rem)',
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
    position: 'absolute',
    right: '2.4rem',
  },
  variants: {
    step: {
      next: {
        bottom: '4.8rem',
      },
      goToHome: {
        width: '100%',
        bottom: '4rem',
        paddingLeft: '4.8rem',
      },
    },
  },
});
