import type { Components } from '@mui/material/styles/index.js'
import type { Theme } from '@mui/system'

import { MuiTypography } from './mui-typography.js'

export const components: Components<Omit<Theme, 'components'>> = {
  MuiTypography,
}
