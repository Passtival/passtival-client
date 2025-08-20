import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const container = style({
  position: 'relative',

  width: '32.7rem',
  height: '21.4rem',
  margin: '0 auto',
  border: `1.5px solid ${themeVars.color.gray_500_40}`,

  borderRadius: '14px',

  overflow: 'hidden',
});
