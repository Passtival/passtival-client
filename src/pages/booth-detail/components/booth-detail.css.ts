import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const text = style({
  display: 'flex',
  width: '100%',
  height: '5.5rem',
  padding: '2.2rem 0rem 0rem 2.2rem',
  ...themeVars.fontStyles.head_eb_20,
});

export const boothDetailItemContainer = style({
  padding: '1.9rem 3rem 1.3rem 3rem',
});
