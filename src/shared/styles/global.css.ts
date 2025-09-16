import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';

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

globalFontFace('BookkMyungjo', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Lt.woff2') format('woff2')",
  fontWeight: '400',
  fontDisplay: 'swap',
});

globalFontFace('BookkMyungjo', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2') format('woff2')",
  fontWeight: '700',
  fontDisplay: 'swap',
});

export const rootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: themeVars.width.full,
  margin: '0 auto',
  minHeight: '100dvh',
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  backgroundColor: themeVars.color.gray_900,
  boxShadow: `0px 0px 10px 0px ${themeVars.color.gray_400}`,
});

export const noBackgroundColor = style([
  rootStyle,
  {
    backgroundColor: themeVars.color.bg_white,
  },
]);

export const onBoardingStyle = style([
  rootStyle,
  {
    background: `url('/onboarding-bg.webp') no-repeat center center`,
    backgroundSize: 'cover',
    fontFamily: `'BookkMyungjo', sans-serif`,
  },
]);
