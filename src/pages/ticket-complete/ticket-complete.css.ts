import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const title = style({
  padding: '1.3rem 2.4rem 1rem 2.4rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.3rem',
  position: 'absolute',
  top: 'calc(1rem)',
  bottom: '0',
  left: '0',
  right: '0',
});

export const complete = style({
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.main_yellow,
});

export const data = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  ...themeVars.fontStyles.caption2_m_15,
  color: themeVars.color.bg_white,
  textAlign: 'center',
});
