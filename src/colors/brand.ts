import { alpha } from '@mui/material'

import { primary } from './constants'

export const brandColors = {
  primary: {
    main: primary,
    white: '#EFFAF3',
    bright: '#D8F3E0',
    soft: '#B3E7C6',
    light: '#82D3A5',
    dark: '#1D7E50',
    heavyDark: '#155036',
    black: '#092519',
    // eslint-disable-next-line no-magic-numbers
    alpha_5: alpha(primary, 0.05),
    // eslint-disable-next-line no-magic-numbers
    alpha_10: alpha(primary, 0.1),
  },
} as const
