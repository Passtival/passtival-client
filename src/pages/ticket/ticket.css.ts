import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  padding: '1.3rem 2.4rem 0 2.4rem',
});
export const header = style({
  ...themeVars.fontStyles.title_b_22,
});

export const subheader = style({
  ...themeVars.fontStyles.button_r_12,
});

export const button = style({ padding: '1.2rem 0 0.2rem 0' });
