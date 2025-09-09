import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  padding: '0 2.4rem 0 2.4rem',
});

export const title = style({ padding: '1.3rem 0 1rem' });

export const subheader = style({
  ...themeVars.fontStyles.button_r_12,
});

export const inputsection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
