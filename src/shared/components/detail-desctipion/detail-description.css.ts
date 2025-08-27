import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '1.6rem 2.4rem 0.4rem 2.4rem',
  gap: '0.5rem',
});
export const title = style({
  color: themeVars.color.main_blue,
  ...themeVars.fontStyles.title_b_18,
});
export const description = style({
  color: themeVars.color.gray_600,
  ...themeVars.fontStyles.body1_r_15,
});
