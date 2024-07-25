import { basicColors } from './basic'
import { brandColors } from './brand'

export const iconColors = {
  active: brandColors.primary.light,
  activeHover: brandColors.primary.main,
  primary: brandColors.primary.heavyDark,
  secondary: brandColors.primary.bright,
  inverse: basicColors.white,
} as const
