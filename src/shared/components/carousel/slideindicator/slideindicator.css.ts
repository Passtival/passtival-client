import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  position: 'absolute',
  bottom: '1.4rem',
  right: '1.4rem',

  padding: '0 1rem',
  backgroundColor: themeVars.color.gray_500_40,
  gap: '0.3rem',
  color: themeVars.color.bg_white,
  borderRadius: '2.3rem',
  fontSize: '1.3rem',
});
