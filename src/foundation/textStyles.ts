import { CSSObject } from 'styled-components'
import * as colors from './colors'

const fontFamily =
  '-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif'
const monospaceFontFamily = "Menlo, Monaco, Consolas, 'Courier New', monospace"

// https://type-scale.com/
// Base size: 16px
// Scale: 1.25
const typeScale = [48, 39, 31, 25, 20, 16, 12, 10, 8]

const base: CSSObject = {
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
}

export const heading1: CSSObject = {
  ...base,
  fontFamily,
  fontSize: typeScale[0],
  lineHeight: 1.75,
  fontWeight: 700,
  color: colors.text,
}

export const heading2: CSSObject = {
  ...base,
  fontFamily,
  fontSize: typeScale[2],
  lineHeight: 1.75,
  fontWeight: 700,
  color: colors.text,
}

export const heading3: CSSObject = {
  ...base,
  fontFamily,
  fontSize: typeScale[4],
  lineHeight: 1.75,
  fontWeight: 700,
  color: colors.text,
}

export const regular = {
  ...base,
  fontFamily,
  fontSize: typeScale[5],
  lineHeight: 1.75,
  fontWeight: 400,
  color: colors.text,
}

export const small = {
  ...base,
  fontFamily,
  fontSize: typeScale[6],
  lineHeight: 1.75,
  fontWeight: 500,
  color: colors.text,
}

export const regularBold = {
  ...regular,
  fontWeight: 600,
}

export const code = {
  ...base,
  fontFamily: monospaceFontFamily,
  fontSize: '90%',
  lineHeight: 1.75,
  fontWeight: 500,
  color: colors.text,
}
