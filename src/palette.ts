import type { PaletteOptions } from '@mui/material/styles/index'

import { brandColors } from './colors/index'
import { white, black } from './colors/constants'


export const palette: PaletteOptions = {
  primary: brandColors.primary,
  bodyText: brandColors.bodyText,
  surface: brandColors.surface,
  border: brandColors.border,
  state: brandColors.state,
  common: {
    white: white,
    black: black,
  },
  mode: 'dark',
}
