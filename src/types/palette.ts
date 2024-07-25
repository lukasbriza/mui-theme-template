export type BaseWebPalette = {
  active: string
  activeHover: string
  primary: string
  secondary: string
  inverse: string
}

export type WebSurfacePalette = {
  active: string
  activeHover: string
  activeAlpha5: string
  activeAlpha10: string
  ripple: string
  primary: string
  secondary: string
  tertiary: string
  quaternary: string
  background: string
  highContrast: string
  soft: string
  navigator: string
  inverse: string
}

export type WebTextPalette = {
  active: string
  activeHover: string
  primary: string
  secondary: string
  tertiary: string
  contrast: string
  inverse: string
}

export type WebStateColor = {
  main: string
  light: string
  bright: string
  soft: string
  strong: string
}

export type WebStatePalette = {
  success: WebStateColor
  warning: WebStateColor
  error: WebStateColor
}

export type WebIconPalette = BaseWebPalette
export type WebBorderPalette = BaseWebPalette

export type WebPalette = {
  bodyText: WebTextPalette
  icon: WebIconPalette
  surface: WebSurfacePalette
  border: WebBorderPalette
  state: WebStatePalette
}
