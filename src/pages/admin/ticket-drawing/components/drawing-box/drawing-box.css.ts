import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const buttonVariants = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3.6rem',
    ...themeVars.fontStyles.button2_sb_14,
    color: themeVars.color.bg_white,
    borderRadius: '12px',
  },

  variants: {
    size: {
      sm: { width: '8.5rem' },
      lg: { width: '12.7rem' },
    },
    color: {
      white: {
        backgroundColor: themeVars.color.bg_white,
        color: themeVars.color.gray_900,
        border: themeVars.color.gray_600,
      },
      gray: { backgroundColor: themeVars.color.gray_500_40 },
      yellow: { backgroundColor: themeVars.color.main_yellow },
    },
  },
});
