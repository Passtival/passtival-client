import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles/theme.css';

export const topnavigationVariants = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `0.1rem solid ${themeVars.color.gray_400}`,
  color: themeVars.color.bg_white,
  backgroundColor: themeVars.color.gray_900,
});

export const leftButton = style({
  width: '5rem',
  height: '5rem',
  padding: '1.3rem 1.2rem 1.3rem 1.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const rightButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '5.6rem',
  marginRight: '1.8rem',
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
  ...themeVars.fontStyles.title_b_16,
});
