import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const inputVariants = recipe({
  base: {
    width: '32.7rem',
    height: '4.6rem',
    padding: '1.3rem 1.2rem',
    border: `1px solid ${themeVars.color.gray_400}`,
    backgroundColor: themeVars.color.bg_white,
    borderRadius: '8px',
    outline: 'none',
    ...themeVars.fontStyles.button2_sb_14,

    selectors: {
      '&::placeholder': { color: themeVars.color.gray_400 },
      '&:focus': {
        borderColor: themeVars.color.gray_900,
      },
      '&:not(:placeholder-shown)': {
        color: themeVars.color.gray_900,
        borderColor: themeVars.color.gray_900,
      },
      '&:focus::placeholder': { color: 'transparent' },
    },
  },

  variants: {
    hasError: {
      false: {},
      true: {
        color: themeVars.color.error_red,
        borderColor: themeVars.color.error_red,
        selectors: {
          '&::placeholder': {
            color: themeVars.color.error_red,
          },
          '&:focus': {
            borderColor: themeVars.color.error_red,
          },
          '&:not(:placeholder-shown)': {
            color: themeVars.color.gray_900,
            borderColor: themeVars.color.gray_900,
          },
          '&:focus::placeholder': {
            color: 'transparent',
          },
        },
      },
    },
  },

  defaultVariants: {
    hasError: false,
  },
});
