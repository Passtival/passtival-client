import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ticketImg = style({
  display: 'flex',
  justifyContent: 'center',
  height: '20rem',
  width: '20rem',
  padding: '3.9rem 0 1.8rem 0',
});

export const section = style({
  width: '100%',
  padding: '0 2.4rem',
});

export const button = style({
  width: '100%',
  padding: '0 2.4rem',

  position: 'fixed',
  bottom: '13.1rem',
});
