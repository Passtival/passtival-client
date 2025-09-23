import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const title = style({ padding: '1.3rem 2.4rem 1.5rem 2.4rem' });

export const container = style({
  padding: '0 2.4rem',
});

export const text = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.bg_white,
  padding: '1rem 0 0.9rem 0.7rem',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
  justifyContent: 'center',
});

export const confetiLottie = style({
  width: '100%',
  height: '100%',
  padding: '2.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
