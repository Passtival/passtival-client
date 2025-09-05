import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  height: '7.3rem',
  padding: '1.3rem 2.4rem 0 2.4rem',
});

export const container = style({
  display: 'grid',
  placeItems: 'center',
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '14.5rem 0 16.5rem 0',
});

export const message = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});
export const time = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.bg_white,
});
export const caution = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.bg_white,
});
export const notice = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  paddingTop: '0.6rem',
  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.bg_white,
});
