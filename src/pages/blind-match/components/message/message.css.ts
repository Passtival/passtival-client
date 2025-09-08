import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const textcontainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4.4rem 0 4.5rem 0',
});
export const message = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});
export const time = style({
  ...themeVars.fontStyles.button_r_14,
  color: themeVars.color.bg_white,
});
