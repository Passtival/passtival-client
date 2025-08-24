import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const buttonVariants = recipe({
  base: {
    width: '12.5rem ',
    height: '5rem',

    backgroundColor: themeVars.color.gray_200,
    borderBottom: `1px solid ${themeVars.color.gray_400}`,

    ...themeVars.fontStyles.button2_sb_14,
    color: themeVars.color.gray_900,
    transition: 'all 0.3s ease',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: themeVars.color.sub_blue,
        borderBottom: `1px solid ${themeVars.color.main_blue}`,

        color: themeVars.color.main_blue,
      },
    },
  },
});

export const tablist = style({});
