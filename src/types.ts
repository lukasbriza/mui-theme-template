/* eslint-disable prettier/prettier */
import type { webTheme } from './theme.js'
import type { WebPalette } from './types/palette.js'
import type { WebShape } from './types/shape.js'
import type { WebSize } from './types/size.js'
import type { WebSurfaces } from './types/surfaces.js'
import type { WebTypographyVariants } from './types/typography.js'

export type { WebFontWeight, WebTypographyVariants } from './types/typography.js'

export type { Theme } from '@mui/material'

export type WebTheme = typeof webTheme

/**
 * Update the Typography's variant prop options.
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    /**
     * Introduce custom variants
     */
    S: true
    M: true
    L: true
    XL: true
    /**
     * Disable unwanted variants
     */
    h6: false
    body1: false
    body2: false
    button: false
    caption: false
    overline: false
    subtitle1: false
    subtitle2: false
  }
}

declare module '@mui/material/styles/createTypography.js' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface FontStyleOptions {
    /**
     * Disable fontWeightLight option
     */
    fontWeightLight?: false
  }
}

/* eslint-disable @typescript-eslint/no-empty-interface -- Module Augmentation */
declare module '@mui/material/styles' {
  interface Palette extends WebPalette { }
  interface PaletteOptions extends Partial<WebPalette> { }
  interface Shape extends WebShape { }
  interface ShapeOptions extends Partial<WebShape> { }
  interface TypographyVariants extends WebTypographyVariants { }
  interface TypographyVariantsOptions extends Partial<WebTypographyVariants> { }
}

declare module '@mui/material/styles' {
  interface Theme {
    size: WebSize
    surfaces: WebSurfaces
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    size?: WebSize
    surfaces?: WebSurfaces
  }
}

declare module '@mui/system' {
  interface Shape extends WebShape { }
}
