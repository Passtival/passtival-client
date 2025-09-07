import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const button = style({
  display: 'flex',
  width: '8.6rem',
  height: '3.6rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  backgroundColor: themeVars.color.main_yellow,
  ...themeVars.fontStyles.button2_sb_14,
  color: themeVars.color.bg_white,
});
