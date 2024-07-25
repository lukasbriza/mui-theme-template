export interface BaseWebPalette {
  active: string
  activeHover: string
  primary: string
  secondary: string
  inverse: string
}

export interface WebSurfacePalette {
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

export interface WebTextPalette {
  active: string
  activeHover: string
  primary: string
  secondary: string
  tertiary: string
  contrast: string
  inverse: string
}

export interface WebStateColor {
  main: string
  light: string
  bright: string
  soft: string
  strong: string
}

export interface WebStatePalette {
  success: WebStateColor
  warning: WebStateColor
  error: WebStateColor
}

export type WebIconPalette = BaseWebPalette;
export type WebBorderPalette = BaseWebPalette;

export interface WebPalette {
  bodyText: WebTextPalette;
  icon: WebIconPalette;
  surface: WebSurfacePalette;
  border: WebBorderPalette;
  state: WebStatePalette;
}
