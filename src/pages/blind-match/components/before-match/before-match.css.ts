import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  height: '7.3rem',
  padding: '1.3rem 2.4rem 0 2.4rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 2.4rem',
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(70vh - 5.6rem - 13.7rem)',
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

export const button = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 2.4rem',

  position: 'fixed',
  bottom: '13.7rem',
  width: '100%',
});
