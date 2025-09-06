import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '0.6rem',
  padding: '0 7.3rem',
});

export const title = style({
  ...themeVars.fontStyles.title2_m_45,
  color: themeVars.color.bg_white,
});

export const passtival = style({
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.bg_white,
  whiteSpace: 'pre-wrap',
});
