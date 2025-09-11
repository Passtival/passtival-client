import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const textInputContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '0.8rem 2.4rem 1.6rem ',
});

export const text = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});

export const foundDateTimeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '0.4rem 2.4rem 1.1rem 2.4rem',
});

export const dropdownContainer = style({
  display: 'flex',
  gap: '0.6rem',
});

export const button = style({
  width: '100%',
  padding: '0 2.4rem',
  position: 'fixed',
  bottom: '5.8rem',
});
