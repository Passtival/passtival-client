import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
});

export const notice = style({
  display: 'flex',
  gap: '0.3rem',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '0.6rem',

  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.gray_900,
});
