import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const boothDetailItem = style({
  display: 'flex',
  width: '100%',
  gap: '3.8rem',
  wordBreak: 'keep-all',
});

export const boothText = style({
  display: 'flex',
  width: '17.7rem',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: 0,
});

export const boothName = style({
  width: '100%',
  marginTop: '0.6rem',
  ...themeVars.fontStyles.title_b_20,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const boothPrice = style({
  width: '100%',
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_blue,
});

export const boothInfo = style({
  maxWidth: '17.7rem',
  height: '4.6rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
});
