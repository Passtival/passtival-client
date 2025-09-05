import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  width: '100%',
  height: '100vh',
  background: `url('/onboarding-bg.svg') no-repeat center center`,
  backgroundSize: 'cover',

  ...themeVars.fontStyles.body_b_13,
});
