import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const buttonVariants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    color: {
      yellow: {
        backgroundColor: themeVars.color.main_yellow,
        color: themeVars.color.bg_white,
        selectors: {
          '&:disabled': {
            backgroundColor: themeVars.color.gray_400,
            color: themeVars.color.gray_900,
          },
        },
      },
      gray: {
        backgroundColor: themeVars.color.gray_600,
        color: themeVars.color.bg_white,
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
        width: '100%',
        borderRadius: '12px',
        ...themeVars.fontStyles.button2_sb_16,
      },

      xl: {
        height: '4.2rem',
        width: '18.3rem',
        borderRadius: '12px',
        ...themeVars.fontStyles.button2_sb_16,
      },

      icon: {
        width: '8.6rem',
        height: '3.7rem',
        borderRadius: '12px',
        ...themeVars.fontStyles.button2_sb_12,
        padding: '1rem 1.2rem 1rem 2.2rem',
        gap: '1.1rem',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: `'Pretendard Variable', sans-serif`,
      },
    },
  },
});
