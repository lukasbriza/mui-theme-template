import { black, gray, white } from "./constants";


export const monoChromaticPalette = {
  color1: '#eeeeee',
  color2: '#aeaeae',
  color3: '#909090',
  color4: '#5c5c5c',
}

export const primaryColors = {
  main: monoChromaticPalette.color2,
  light: monoChromaticPalette.color1,
  dark: monoChromaticPalette.color4,
} as const


export const brandColors = {
  primary: primaryColors,

  surface: {
    primary: monoChromaticPalette.color4,
    secondary: monoChromaticPalette.color3,
    tertiary: monoChromaticPalette.color2,
    contrast: white,
    background: monoChromaticPalette.color4
  },

  bodyText: {
    primary: black,
    secondary: gray,
    contrast: white
  },

  state: {
    success: {
      primary: '#51a147',
      secondary: '#73976e'
    },
    warning: {
      primary: '#e8c53c',
      secondary: '#d7c066',
    },
    error: {
      primary: '#b72121',
      secondary: '#873434'
    }
  },

  border: {
    primary: primaryColors.main,
    activeHover: primaryColors.dark,
    contrast: white,
  },

} as const
