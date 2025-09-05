import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const authKey = style({
  display: 'flex',
  width: '18.3rem',
  height: '7.6rem',

  alignItems: 'center',
  justifyContent: 'center   ',

  ...themeVars.fontStyles.head_eb_22,
  backgroundColor: themeVars.color.bg_white_70,
  color: themeVars.color.cool_gray_100,

  borderRadius: '12px',
});
