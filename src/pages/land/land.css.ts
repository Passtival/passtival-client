import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '16.8rem',
  padding: '26.8rem 8.7rem 24.9rem 8.6rem',
});

export const title = style({
  textAlign: 'center',
  color: themeVars.color.bg_white,
  ...themeVars.fontStyles.title_b_18,
});

export const passtival = style({
  color: themeVars.color.bg_white,
  fontSize: '45px',
});
