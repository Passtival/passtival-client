import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const mainTitle = style({
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.bg_white,
});

export const subTitle = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.bg_white,
});
