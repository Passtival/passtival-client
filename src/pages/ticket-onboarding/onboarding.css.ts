import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '65vh',
});

export const section = style({
  flexGrow: 1,
  width: '100%',
  padding: '0 2.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const detail = style({
  position: 'sticky',
  bottom: '20rem',
  marginBottom: '1.5rem',
  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.gray_600,
  borderBottom: `1px solid ${themeVars.color.gray_600}`,
});

export const button = style({
  width: '100%',
  padding: '0 2.4rem',

  position: 'sticky',
  bottom: '13.1rem',
});
