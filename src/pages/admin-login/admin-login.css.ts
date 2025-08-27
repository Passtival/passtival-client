import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const title = style({
  width: '100%',
  padding: '1.3rem 2.4rem 2.4rem 2.4rem',

  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.gray_900,
});

export const loginContainer = style({
  display: 'grid',
  padding: '6.9rem 2.4rem 0 2.4rem',
  gap: '0.5rem',
});
