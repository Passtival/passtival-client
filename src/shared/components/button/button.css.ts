import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const buttonVariants = recipe({
  base: {
    cursor: 'pointer',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    color: {
      blue: {
        backgroundColor: themeVars.color.main_blue,
        color: themeVars.color.bg_white,
        selectors: {
          '&:disabled': {
            backgroundColor: themeVars.color.gray_400,
            color: themeVars.color.gray_900,
          },
        },
      },
    },

    size: {
      sm: {
        height: '3.5rem',
        width: '9.6rem',
        borderRadius: '8px',
        ...themeVars.fontStyles.button2_sb_12,
      },

      lg: {
        height: '5.4rem',
        width: '32.7rem',
        borderRadius: '12px',
        ...themeVars.fontStyles.button2_sb_16,
      },
    },
  },
});
