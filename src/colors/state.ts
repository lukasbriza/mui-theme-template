import { primary } from './constants'

export const stateColors = {
  success: {
    main: primary,
    light: '#EFFAF3',
    bright: '#D8F3E0',
    soft: '#B3E7C6',
    strong: '#1D7E50',
  },
  warning: {
    main: '#E56000',
    light: '#FFF8EC',
    bright: '#FFF0D3',
    soft: '#FFDEA5',
    strong: '#CC4D02',
  },
  error: {
    main: '#E01649',
    light: '#FFF1F2',
    bright: '#FFE3E6',
    soft: '#FFCBD4',
    strong: '#C40C3F',
  },
} as const
