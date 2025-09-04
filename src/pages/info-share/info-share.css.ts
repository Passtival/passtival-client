import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'pre-wrap',
  padding: '3rem 0 0 3rem',
});

export const title = style({
  ...themeVars.fontStyles.head_eb_22,
  color: themeVars.color.bg_white,
});

export const subtitle = style({
  ...themeVars.fontStyles.caption1_sb_18,
  color: themeVars.color.bg_white,
});

export const itemTitle = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.bg_white,
});

export const text = style({
  color: themeVars.color.bg_white,
});
