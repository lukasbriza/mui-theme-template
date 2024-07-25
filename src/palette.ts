import type { PaletteOptions } from '@mui/material/styles/index.js'

import {
  bodyTextColors,
  stateColors,
  iconColors,
  borderColors,
  surfaceColors,
  basicColors,
  primaryColors,
} from './colors/index.js'

export const palette: PaletteOptions = {
  border: borderColors,
  icon: iconColors,
  state: stateColors,
  surface: surfaceColors,
  bodyText: bodyTextColors,
  common: {
    white: basicColors.white,
    black: basicColors.black,
  },
  mode: 'dark',
  contrastThreshold: 4.5,
  tonalOffset: 0.3,
  primary: primaryColors,
}
