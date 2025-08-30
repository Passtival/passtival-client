import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const textInputContainer = style({
  width: '100%',
  height: '11.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
  padding: '0.8rem 2.4rem 2.4rem 2.4rem',
});

export const text = style({
  ...themeVars.fontStyles.title_b_18,
});

export const foundDateTimeContainer = style({
  height: '10.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
  padding: '0.4rem 2.4rem 2.4rem 2.4rem',
});

export const dropdownContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.6rem',
});

export const button = style({
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'fixed',
  bottom: '6.1rem',
});
