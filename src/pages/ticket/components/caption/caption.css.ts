import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const message = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.3rem',

  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.bg_white,
  paddingTop: '0.3rem',
  marginBottom: '12rem',
});

export const infoText = style({
  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.bg_white,
});
