import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const dropdownItem = style({
  ...themeVars.fontStyles.button2_sb_12,
  color: themeVars.color.gray_900,
  padding: '1.2rem',
  cursor: 'pointer',
  selectors: {
    '&:hover:where(:not([data-selected="true"]))': {
      backgroundColor: themeVars.color.gray_200,
    },
    '&:not(:disabled):active': {
      backgroundColor: themeVars.color.gray_200,
    },
  },
});

export const dropdownItemSelected = style([
  dropdownItem,
  {
    backgroundColor: themeVars.color.gray_200,
  },
]);
