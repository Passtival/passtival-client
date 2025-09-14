import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  padding: '1.3rem 2.4rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(80vh - 5.6rem - 13.7rem)',
});

export const title = style({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '1.3rem',
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
