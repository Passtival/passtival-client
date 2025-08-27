import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const agreementOption = style({
  display: 'flex',
  width: '100%',
  gap: '10.5rem',
  justifyContent: 'space-around',
  alignItems: 'center',
  cursor: 'pointer',
});

export const checkbox = recipe({
  base: {
    display: 'flex',
    width: '2rem',
    height: '2rem',
    border: `1px solid ${themeVars.color.main_blue}`,
    borderRadius: '4px',
    backgroundColor: themeVars.color.bg_white,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  },
  variants: {
    checked: {
      false: {},
      true: {
        backgroundColor: themeVars.color.main_blue,
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const checkboxLeft = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
  cursor: 'pointer',
});

export const arrowIcon = style({
  transform: 'rotate(180deg)',
});

export const labelText = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.gray_900,
});
