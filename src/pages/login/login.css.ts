import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
});

export const kakaoButton = style({
  marginTop: '17.1rem',
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.gray_900,
});

export const description = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
  whiteSpace: 'pre-wrap',
  padding: '0 3.3rem',
});
