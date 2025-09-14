import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const boothDetailItemContainer = style({
  padding: '1.9rem 3rem 1.5rem 3rem',
});

export const nonetext = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 'calc(4rem)',
  bottom: '0',
  left: '0',
  right: '0',
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});
