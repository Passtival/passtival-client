import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  position: 'absolute',
  bottom: '1.4rem',
  right: '1.4rem',

  padding: '0 1rem',

  backgroundColor: themeVars.color.gray_500_40,
  borderRadius: '2.3rem',

  color: themeVars.color.bg_white,
  fontSize: '1.3rem',

  gap: '0.3rem',
  zIndex: 10,
});
