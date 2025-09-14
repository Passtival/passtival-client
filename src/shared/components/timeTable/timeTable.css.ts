import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  padding: '0 2.4rem 0 2.4rem',
});

export const top = style({
  display: 'flex',

  height: '1.3rem',
  alignItems: 'flex-end',
  gap: '0.3rem',

  position: 'relative',
  left: '-0.35rem',
});

export const bottom = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '15.5rem',
  borderLeft: `1px solid ${themeVars.color.main_yellow}`,
  gap: '0.8rem',
  paddingTop: '0.6rem',
});

export const leftBar = style({
  height: '100%',
  borderRadius: `1px solid ${themeVars.color.main_yellow}`,
});

export const text = style({
  color: themeVars.color.main_yellow,
  ...themeVars.fontStyles.caption2_m_12,
  height: '100%',
});
