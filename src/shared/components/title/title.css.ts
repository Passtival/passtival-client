import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const titleStyle = recipe({
  variants: {
    type: {
      tb18: { ...themeVars.fontStyles.title_b_18 },
      tb20: { ...themeVars.fontStyles.title_b_20 },
      tb22: { ...themeVars.fontStyles.title_b_22 },
      cm12: { ...themeVars.fontStyles.caption2_m_12 },
    },
  },
});
