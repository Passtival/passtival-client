import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  width: '32.7rem',
  height: '5.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.6rem',

  borderRadius: '12px',
  backgroundColor: themeVars.color.kakao_yellow,
});

export const text = style({
  ...themeVars.fontStyles.button2_sb_16,
  color: themeVars.color.gray_900,
});
