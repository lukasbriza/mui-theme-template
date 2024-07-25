'use client'

import type { ThemeOptions } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider'

import { breakpoints } from './breakpoints'
import { components } from './components/index'
import { palette } from './palette'
import { shape } from './shape'
import { size } from './size'
import { spacing } from './spacing'
import { surfaces } from './surfaces'
import { typography } from './typography'


const options: ThemeOptions = {
  breakpoints,
  components,
  palette,
  size,
  shape,
  spacing,
  surfaces,
  typography,
};

export const webTheme = createTheme(options);

export const ThemeProvider = ({ children, theme = webTheme }: Partial<ThemeProviderProps>) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export { useTheme } from '@mui/material'
