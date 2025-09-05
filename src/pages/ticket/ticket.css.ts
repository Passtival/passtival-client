import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const headercontainer = style({
  width: '100%',
  height: '100%',
  padding: '1.3rem 2.4rem 1rem 2.4rem',
  color: themeVars.color.gray_900,
});
export const header = style({
  ...themeVars.fontStyles.title_b_22,
});

export const subheader = style({
  ...themeVars.fontStyles.button_r_12,
});

export const container = style({
  textAlign: 'center',
});

export const product = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.gray_900,
  padding: '0.8rem 0 0.7rem 0',
});

export const productName = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
  padding: '1rem 0 2.3rem 0',
});

export const button = style({ padding: '1.2rem 0 0.2rem 0' });

export const message = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.gray_900,
  padding: '0.2rem 0 ',
});
