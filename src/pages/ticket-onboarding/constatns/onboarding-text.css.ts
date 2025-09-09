import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const ticketImg = style({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'center',
  height: '20rem',
  width: '100%',
  margin: '3.9rem 0 3.7rem 0',
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.main_yellow,
  padding: '3.4rem 0 0.6rem ',
});

export const section = style({});

export const header = style({
  ...themeVars.fontStyles.caption2_m_15,
  color: themeVars.color.main_yellow,
  paddingBottom: '0.4rem',
});

export const nottitle = style({
  paddingTop: '4rem',
});

export const description = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.bg_white,

  paddingBottom: '0.8rem',
});

export const point = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.main_yellow,
});
