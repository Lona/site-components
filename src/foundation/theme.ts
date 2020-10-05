import * as colors from './colors'
import * as spacing from './spacing'
import * as textStyles from './textStyles'
import * as sizes from './sizes'

export const defaultTheme = { colors, spacing, textStyles, sizes }

export type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
