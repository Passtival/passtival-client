import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const boothDetailItem = style({
  display: 'flex',
  width: '37.5rem',
  height: '13.8rem',
  padding: '1.9rem 3rem',
  gap: '3.8rem',
  wordBreak: 'keep-all',
});

export const boothText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
});

export const boothItemName = style({
  paddingTop: '0.6rem',
  ...themeVars.fontStyles.title_b_20,
});

export const boothPrice = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_blue,
});

export const boothInfo = style({
  display: 'flex',
  maxWidth: '17.7rem',
  gap: '0.6rem 0',
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
});
