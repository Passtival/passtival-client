import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const inputVariants = recipe({
  base: {
    width: '100%',
    height: '4.6rem',
    padding: '1.3rem 1.2rem',
    border: `1px solid ${themeVars.color.bg_white}`,
    backgroundColor: themeVars.color.gray_500_40,
    borderRadius: '8px',
    outline: 'none',
    ...themeVars.fontStyles.button2_sb_14,

    selectors: {
      '&::placeholder': { color: themeVars.color.bg_white },
      '&:focus, &:not(:placeholder-shown)': {
        color: themeVars.color.gray_900,
        backgroundColor: themeVars.color.bg_white,
        border: `1px solid ${themeVars.color.gray_400}`,
      },
      '&:focus::placeholder': { color: 'transparent' },
    },
  },

  variants: {
    hasError: {
      false: {},
      true: {
        color: themeVars.color.error_red,
        background: themeVars.color.bg_white,
        borderColor: themeVars.color.error_red,
        selectors: {
          '&::placeholder': {
            color: themeVars.color.error_red,
          },
          '&:focus': {
            borderColor: themeVars.color.error_red,
          },
          '&:not(:placeholder-shown)': {
            color: themeVars.color.bg_white,
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
