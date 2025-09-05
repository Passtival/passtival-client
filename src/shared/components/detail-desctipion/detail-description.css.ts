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
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.main_yellow,
});
export const description = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_400,
});

export const songslist = style({
  display: 'flex',
  flexDirection: 'column',

  color: themeVars.color.gray_600,
  ...themeVars.fontStyles.body1_r_15,
});
