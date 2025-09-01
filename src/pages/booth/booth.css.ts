import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const chipContainer = style({
  display: 'flex',
  gap: '0.9rem',
  height: '6rem',
  justifyContent: 'center',
});

export const noticeText = style({
  width: '37.4rem',
  height: '5.5rem',
  padding: '1.3rem 2.4rem 1rem 2.4rem',
});

export const boothinfoText = style({
  width: '100%',
  height: '8rem',
  padding: '2rem 2.4rem 1.8rem 2.4rem',
});
