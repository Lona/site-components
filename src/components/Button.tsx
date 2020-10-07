import styled from 'styled-components'

export const Button = styled.button(({ theme }) => ({
  ...theme.textStyles.regular,
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
}))
