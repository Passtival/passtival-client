import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const title = style({
  width: '100%',
  padding: '1.3rem 2.4rem 2.4rem 2.4rem',

  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.gray_900,
});

export const container = style({});
