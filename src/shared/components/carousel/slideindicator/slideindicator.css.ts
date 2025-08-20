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

  backgroundColor: themeVars.color.gray_500_40,
  borderRadius: '2.3rem',

  color: themeVars.color.bg_white,
  fontSize: '1.3rem',
  letterSpacing: '0.3rem',
  zIndex: 10,
});
