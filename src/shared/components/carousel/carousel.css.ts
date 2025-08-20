import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const container = style({
  width: '32.7rem',
  height: '21.4rem',
  borderRadius: '14px',
  border: `1.5px solid ${themeVars.color.gray_500_40}`,
  overflow: 'hidden',
  margin: '0 auto',
});
