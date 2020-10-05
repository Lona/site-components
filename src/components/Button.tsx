import styled, { CSSObject } from 'styled-components'
import { Theme } from '../foundation/theme'

const createBaseStyle = (theme: Theme): CSSObject => ({
  color: theme.colors.text,
  display: 'inline-block',
  minWidth: '300px',
  border: `1px solid ${theme.colors.divider}`,
  textAlign: 'center',
  textDecoration: 'none',
  background: theme.colors.contentBackground,
  padding: '3px 20px',
  borderRadius: '3px',
  '&: hover': {
    background: theme.colors.blockBackground,
  },
})

export const Button = styled.button(({ theme }) => createBaseStyle(theme))
export const Link = styled.a(({ theme }) => createBaseStyle(theme))
