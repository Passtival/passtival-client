import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const contentWrapper = style({
  width: '100%',
  padding: '1.3rem 2.4rem 2.4rem 2.4rem',
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.bg_white,
});

export const subTitle = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.bg_white,
});

export const loginContainer = style({
  display: 'grid',
  padding: '6.9rem 2.4rem 0 2.4rem',
  gap: '2rem',
});
