import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2.4rem 12rem',
});

export const notice = style({
  display: 'flex',
  gap: '0.3rem',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '0.6rem',

  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.bg_white,
});
