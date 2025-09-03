import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const header = style({
  padding: '1.3rem 2.4rem',
});
export const title = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '11rem 0 1.3rem 0',
  ...themeVars.fontStyles.title_b_18,
  color: themeVars.color.main_blue,
});
export const container = style({});
export const myInfo = style({});
export const instaId = style({});
export const phoneNumber = style({});
export const opponentInfo = style({});
export const message = style({});
