import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh',
});

export const section = style({
  width: '100%',
  padding: '0 2.4rem',
});

export const detail = style({
  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.gray_600,
  borderBottom: `1px solid ${themeVars.color.gray_600}`,
  paddingTop: '2rem',
});

export const button = style({
  width: '100%',
  padding: '0 2.4rem',

  position: 'fixed',
  bottom: '13.1rem',
});
