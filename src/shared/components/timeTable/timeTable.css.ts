import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const top = style({
  display: 'flex',
  height: '1.3rem',
  alignItems: 'flex-end',
  gap: '0.3rem',
  marginLeft: '1.9rem',
});

export const bottom = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2.3rem',
  width: '33.7rem',
  height: '14.5rem',
  borderLeft: `1px solid ${themeVars.color.main_blue}`,
});

export const text = style({
  color: themeVars.color.main_blue,
  ...themeVars.fontStyles.caption2_m_12,
  height: '100%',
});
