import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { color } from './token/color.css';
import { fontStyles } from './token/font-style';
import { typography } from './token/typography.css';
import { width } from './token/width.css';

const tokens = {
  color: color,
  fontStyles: fontStyles,
  width: width,
  ...typography,
};

const properties = defineProperties({
  properties: tokens,
});
const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { sprinkles, themeClass, themeVars, tokens };
