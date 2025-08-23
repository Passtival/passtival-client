import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const img = style({
  width: '32.7rem',
  height: '21.4rem',
  border: `1.5px solid ${themeVars.color.gray_500_40}`,
  borderRadius: '8px',
  objectFit: 'cover',
});
