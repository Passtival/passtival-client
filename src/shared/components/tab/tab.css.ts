import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const buttonVariants = recipe({
  base: {
    width: '12.5rem ',
    height: '5rem',
    ...themeVars.fontStyles.button2_sb_14,
    backgroundColor: themeVars.color.gray_200,
    borderBottom: `1px solid ${themeVars.color.gray_400}`,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: themeVars.color.sub_blue,
        color: themeVars.color.main_blue,
        borderBottom: `1px solid ${themeVars.color.main_blue}`,
      },
    },
  },
});

export const tablist = style({});
