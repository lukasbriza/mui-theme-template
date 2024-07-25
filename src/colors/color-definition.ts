import type { Palette } from '@mui/material'

import { bodyTextColors } from './body-text'
import { borderColors } from './border'
import { iconColors } from './icon'
import { primaryColors } from './primary'
import { stateColors } from './state'
import { surfaceColors } from './surface'

/**
 * Used color keys from Palette
 */
type PaletteKey =
  | keyof Pick<Palette, 'bodyText' | 'border' | 'icon' | 'primary' | 'surface'>
  | ('state.error' | 'state.success' | 'state.warning')

type Colors = Record<string, unknown>

interface ColorType {
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
