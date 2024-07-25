import { basicColors } from './basic.js'
import { brandColors } from './brand.js'

export const borderColors = {
  active: brandColors.primary.light,
  activeHover: brandColors.primary.main,
  primary: basicColors.gray2,
  secondary: basicColors.gray1,
  inverse: basicColors.white,
} as const
