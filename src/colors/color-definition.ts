import type { Palette } from '@mui/material'

import { bodyTextColors } from './body-text.js'
import { borderColors } from './border.js'
import { iconColors } from './icon.js'
import { primaryColors } from './primary.js'
import { stateColors } from './state.js'
import { surfaceColors } from './surface.js'

/**
 * Used color keys from Palette
 */
type PaletteKey =
  | keyof Pick<Palette, 'bodyText' | 'border' | 'icon' | 'primary' | 'surface'>
  | ('state.error' | 'state.success' | 'state.warning')

type Colors = Record<string, unknown>

type ColorType = {
  /**
   * Palette key where its colors can be found under.
   */
  key: PaletteKey
  /**
   * Title for Storybook
   */
  title: string
  /**
   * List of colors listed in Storybook
   */
  colors: Colors
}

/**
 * Color definition represents colors used in the project and to be easily generated into MUI theme and Storybook.
 */
export const colorDefinition: ColorType[] = [
  {
    key: 'primary',
    title: 'Primary',
    colors: primaryColors,
  },
  {
    key: 'bodyText',
    title: 'Text',
    colors: bodyTextColors,
  },
  {
    key: 'icon',
    title: 'Icon',
    colors: iconColors,
  },
  {
    key: 'surface',
    title: 'Surface',
    colors: surfaceColors,
  },
  {
    key: 'border',
    title: 'Border',
    colors: borderColors,
  },
  {
    key: 'state.success',
    title: 'State Success',
    colors: stateColors.success,
  },
  {
    key: 'state.warning',
    title: 'State Warning',
    colors: stateColors.warning,
  },
  {
    key: 'state.error',
    title: 'State Error',
    colors: stateColors.error,
  },
]
