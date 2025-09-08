import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const title = style({
  width: '100%',
  padding: '1.3rem 2.4rem 2.4rem 2.4rem',
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.bg_white,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',

  paddingBottom: '1.3rem',
});

export const authKey = style({
  display: 'flex',
  width: '18.3rem',
  height: '7.6rem',

  alignItems: 'center',
  justifyContent: 'center   ',

  ...themeVars.fontStyles.head_eb_22,
  backgroundColor: themeVars.color.bg_white_70,
  color: themeVars.color.gray_900,

  borderRadius: '12px',
});
