import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'pre-wrap',
});

export const title = style({
  ...themeVars.fontStyles.head_eb_22,
  color: themeVars.color.gray_900,
});

export const subtitle = style({
  ...themeVars.fontStyles.caption1_sb_18,
  color: themeVars.color.gray_900,
});

export const itemTitle = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_900,
});
