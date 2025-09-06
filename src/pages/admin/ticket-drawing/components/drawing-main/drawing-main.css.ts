import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const text = style({
  padding: '1.3rem 2.4rem 3.2rem 2.4rem',
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.bg_white,
});
export const container = style({
  display: 'flex',
  paddingBottom: '13rem',
  alignItems: 'center',
  padding: '15rem 2.5rem 0 2.5rem',
});
