import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  width: '100%',
  padding: '1.3rem 5.9rem 1.4rem 5.9rem',
});
export const infoTitle = style({
  paddingBottom: '0.7rem',
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.gray_900,
});

export const infoText = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
});
export const info = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_900,
});
