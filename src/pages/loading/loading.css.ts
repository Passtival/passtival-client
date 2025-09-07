import { style } from '@vanilla-extract/css';

import { rootStyle, themeVars } from '@shared/styles';

export const container = style([
  rootStyle,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    height: '100vh',
    padding: '0 8.8rem',
  },
]);

export const title = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.main_yellow,
});
