import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '430px',
    '--height': '100dvh',
  },
});

globalStyle('html, body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: themeVars.width.full,
  margin: '0',
  padding: '0',
  fontSize: '62.5%',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

export const rootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: themeVars.width.full,
  margin: '0 auto',
  minHeight: '100dvh',
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  backgroundColor: themeVars.color.bg_white,
  boxShadow: `0px 0px 10px 0px ${themeVars.color.gray_400}`,
});
