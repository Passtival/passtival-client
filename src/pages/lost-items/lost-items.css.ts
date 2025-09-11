import { style } from '@vanilla-extract/css';

import { HEADER_HEIGHT } from '@shared/components/header/header.css';
import { themeVars } from '@shared/styles';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.8rem 2.4rem 1.4rem 2.4rem',
  marginTop: HEADER_HEIGHT,
});

export const textContainer = style({
  color: themeVars.color.bg_white,
});

export const cardlist = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 1.5rem 15.3rem 1.5rem',
  gap: '2rem',
  marginBottom: '15.3rem',
});
