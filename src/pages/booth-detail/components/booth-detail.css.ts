import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const boothDetailItemContainer = style({
  padding: '1.9rem 3rem 1.5rem 3rem',
});

export const nonetext = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '28.8rem',
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});
