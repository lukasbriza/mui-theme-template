'use client'

import type { ThemeOptions } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider.js'

import { breakpoints } from './breakpoints.js'
import { components } from './components/index.js'
import { palette } from './palette.js'
import { shape } from './shape.js'
import { size } from './size.js'
import { spacing } from './spacing.js'
import { surfaces } from './surfaces.js'
import { typography } from './typography.js'

const options: ThemeOptions = {
  breakpoints,
  components,
  palette,
  size,
  shape,
  spacing,
  surfaces,
  typography,
}

export const webTheme = createTheme(options)

export const ThemeProvider = ({ children, theme = webTheme }: Partial<ThemeProviderProps>) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export { useTheme } from '@mui/material'
