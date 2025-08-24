import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const container = style({
  height: '8.4rem',
  width: '100%',
  padding: '2.2rem 2.4rem 1.3rem 2.4rem',
});
export const subTitle = style({
  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.gray_900,
});
export const title = style({
  ...themeVars.fontStyles.head_eb_20,
  color: themeVars.color.main_blue,
});
