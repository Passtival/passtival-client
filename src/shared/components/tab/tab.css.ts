import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
  width: '100%',
});

export const buttonVariants = recipe({
  base: {
    height: '5rem',

    backgroundColor: themeVars.color.gray_500_40,
    borderBottom: `1px solid ${themeVars.color.gray_400}`,

    ...themeVars.fontStyles.button2_sb_14,
    color: themeVars.color.bg_white,
    transition: 'all 0.3s ease',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: themeVars.color.main_yellow,
        borderBottom: `1px solid ${themeVars.color.bg_white}`,

        color: themeVars.color.bg_white,
      },
    },
  },
});
