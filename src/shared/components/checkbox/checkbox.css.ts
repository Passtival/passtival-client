import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const checkboxWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
  cursor: 'pointer',
});

export const checkboxBox = style({
  display: 'flex',
  width: '2rem',
  height: '2rem',
  border: `1px solid ${themeVars.color.main_blue}`,
  borderRadius: '4px',
  backgroundColor: 'transparent',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
});

export const checked = style({
  backgroundColor: themeVars.color.main_blue,
});

export const checkIcon = style({
  width: '1.4rem',
  height: '1.4rem',
  color: themeVars.color.bg_white,
});

export const labelText = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.gray_900,
});
