import { style } from '@vanilla-extract/css';

import { HEADER_HEIGHT } from '@shared/components/header/header.css';

export const container = style({
  marginTop: HEADER_HEIGHT,
  marginBottom: '15.3rem',
});

export const chipContainer = style({
  display: 'flex',
  gap: '0.9rem',
  height: '6rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2.4rem',
});

export const noticeText = style({
  width: '100%',
  height: '5.5rem',
  padding: '1.3rem 2.4rem 1rem 2.4rem',
});

export const boothinfoText = style({
  width: '100%',
  height: '8rem',
  padding: '2rem 2.4rem 1.8rem 2.4rem',
});

export const carouselWrapper = style({
  padding: '0 2.4rem',
});

export const cardContainer = style({
  padding: '0 2.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});
