import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';
import { width } from '@shared/styles/token/width.css';

export const card = style({
  width: '32.1rem',
  height: '13.3rem',

  backgroundColor: themeVars.color.sub_blue_40,
  boxShadow: '2px 2px 5px rgba(24, 118, 250, 0.20)',

  borderRadius: '10px',
});
export const title = style({
  ...themeVars.fontStyles.title_b_18,
  padding: '1.4rem 1.1rem 0 1.5rem',
});
export const major = style({
  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_blue,
  padding: '0 1.1rem 0.5rem 1.5rem',
});
export const majortxt = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.gray_600,
  padding: '0 3rem 0 1.5rem',
});
export const losttxt = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
  padding: '0 1.1rem 0 1.6rem',
});
export const img = style({});
