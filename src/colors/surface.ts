import { basicColors } from './basic.js'
import { brandColors } from './brand.js'

export const surfaceColors = {
  active: brandColors.primary.light,
  activeHover: brandColors.primary.main,
  activeAlpha5: brandColors.primary.alpha_5,
  activeAlpha10: brandColors.primary.alpha_10,
  ripple: basicColors.gray1Alpha10,
  primary: brandColors.primary.alpha_10,
  secondary: basicColors.gray3,
  tertiary: basicColors.gray6,
  quaternary: basicColors.black,
  background: basicColors.gray1,
  highContrast: brandColors.primary.white,
  soft: brandColors.primary.black,
  navigator: basicColors.gray1Alpha60,
  inverse: basicColors.white,
} as const
