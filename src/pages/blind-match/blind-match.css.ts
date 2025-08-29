import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const title = style({
  padding: '1.3rem 2.4rem 1rem 2.4rem',
});
export const container = style({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textcontainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '8.3rem',
});

export const message = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_blue,
});
export const time = style({
  ...themeVars.fontStyles.button_r_14,
  color: themeVars.color.gray_900,
});
export const attention = style({
  display: 'flex',
  gap: '0.3rem',
  height: '3.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.gray_900,
});
export const button = style({ height: '5rem' });

export const notice = style({
  display: 'flex',
  gap: '0.3rem',
  justifyContent: 'center',
  alignItems: 'center',
  ...themeVars.fontStyles.button_r_12,
  paddingTop: '0.6rem',
  color: themeVars.color.gray_900,
});
