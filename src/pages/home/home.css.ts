import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const chipContainer = style({
  display: 'flex',
  gap: '4.1rem',
  height: '4.7rem',
  justifyContent: 'center',
});

export const noticeText = style({
  width: '37.4rem',
  height: '7rem',
  padding: '1.3rem 2.4rem 1rem 2.4rem',
});

export const festivalScheduleText = style({
  width: '100%',
  height: '8rem',
  padding: '2rem 23.2rem 1.8rem 2.4rem',
});
