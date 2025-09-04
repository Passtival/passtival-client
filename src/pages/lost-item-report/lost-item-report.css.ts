import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const textInputContainer = style({
  width: '100%',
  height: '9.1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '0.4rem 2.4rem 1.1rem 2.4rem',
});

export const text = style({
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.gray_900,
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
  gap: '0.6rem',
});

export const button = style({
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'fixed',
  bottom: '5.8rem',
});
