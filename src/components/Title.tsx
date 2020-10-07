import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'
import { Link } from './Link'

const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.7;
  }
`

const Label = styled.span(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  color: theme.colors.text,
}))

const Image = styled.img({
  width: '24px',
  height: '24px',
  backgroundSize: 'cover',
  border: 'none',
  outline: 'none',
})

export function Title({
  iconUrl,
  children,
}: {
  iconUrl?: string
  children: ReactNode
}) {
  const hasIcon = !!iconUrl

  return (
    <Container href="/">
      {hasIcon && <Image src={iconUrl!} />}
      {hasIcon && <Spacer size={10} />}
      <Label>{children}</Label>
    </Container>
  )
}
