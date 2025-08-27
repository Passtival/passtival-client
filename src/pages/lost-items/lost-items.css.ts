import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  ...themeVars.fontStyles.title_b_20,
  color: themeVars.color.gray_900,
  padding: '1.8rem 0 0 2.4rem',
});
export const subheader = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.gray_900,
  padding: '0 0 1.4rem 2.4rem',
});
export const cardlist = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 0',
  gap: '2rem',
});
