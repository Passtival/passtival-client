import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '50vh',
});

export const ticketImgWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const ticketImg = style({
  display: 'block',
  margin: '0 auto',
  height: '20rem',
  width: '20rem',
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.main_yellow,
  padding: '1rem 0 0.6rem ',
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
