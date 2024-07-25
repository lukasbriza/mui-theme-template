import { alpha } from '@mui/material'

import { black, gray, white } from './constants.js'

export const basicColors = {
  gray1: gray,
  gray2: '#383D42',
  gray3: '#40474C',
  gray4: '#4A525A',
  gray5: '#5B666E',
  gray6: '#717E86',
  gray7: '#B6BEC3',
  gray8: '#D8DCDF',
  gray9: '#EEEFF0',
  gray10: '#F4F5F6',
  // eslint-disable-next-line no-magic-numbers
  gray1Alpha10: alpha(gray, 0.1),
  // eslint-disable-next-line no-magic-numbers
  gray1Alpha60: alpha(gray, 0.6),
  black,
  white,
  // eslint-disable-next-line no-magic-numbers
  whiteAlpha_60: alpha(white, 0.6),
} as const
