import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  padding: '1.3rem 2.4rem',
});

export const title = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '11rem 0 1.3rem 0',
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.main_yellow,
});

export const message = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  whiteSpace: 'pre-line',
  paddingTop: '5.5rem 0 3.3rem 0',
  ...themeVars.fontStyles.caption2_m_15,
  color: themeVars.color.bg_white,
});
