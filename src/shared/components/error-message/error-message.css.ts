import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  textAlign: 'center',
  padding: '2rem',
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
});
