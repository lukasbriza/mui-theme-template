import type { Components } from '@mui/material/styles/index'
import type { Theme } from '@mui/system'

import { MuiTypography } from './mui-typography'

export const components: Components<Omit<Theme, 'components'>> = {
  MuiTypography,
}
