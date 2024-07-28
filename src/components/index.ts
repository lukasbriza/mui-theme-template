import type { Components } from '@mui/material/styles/index'

import { MuiTypography } from './mui-typography'
import { WebTheme } from '../types'

export const components: Components<Omit<WebTheme, 'components'>> = {
  MuiTypography,
}
