import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '1.5rem 2.4rem 1.6rem 2.4rem',
});

export const line = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '0.5rem',
});

export const label = style({
  ...themeVars.fontStyles.caption2_m_15,
  color: themeVars.color.gray_900,
});
export const value = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
});

export const message = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.main_blue,
  padding: '0.8rem 0 0 0',
});
