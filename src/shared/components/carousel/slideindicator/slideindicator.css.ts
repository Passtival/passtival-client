import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: '1.4rem',
  right: '1.4rem',
  height: '2.4rem',
  width: '4.6rem',
  gap: '0.3rem',

  backgroundColor: themeVars.color.gray_500_40,
  borderRadius: '2.3rem',

  ...themeVars.fontStyles.button_r_12,
  color: themeVars.color.bg_white,
});

export const number = style({
  display: 'inline-block',
  width: '1rem',

  textAlign: 'center',
});
