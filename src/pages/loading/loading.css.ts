import { style } from '@vanilla-extract/css';

import { rootStyle } from '@shared/styles';

export const pageContainer = style([
  rootStyle,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    height: '100vh',
    padding: '0 8.8rem',
  },
]);
