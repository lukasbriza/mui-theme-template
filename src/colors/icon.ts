import { basicColors } from './basic.js'
import { brandColors } from './brand.js'

export const iconColors = {
  active: brandColors.primary.light,
  activeHover: brandColors.primary.main,
  primary: brandColors.primary.heavyDark,
  secondary: brandColors.primary.bright,
  inverse: basicColors.white,
} as const
