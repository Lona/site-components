import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Spacer from '../components/Spacer'
import { Link } from '../components/Link'

const Container = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',

  '&:hover': {
    opacity: 0.85,
  },

  '&:active': {
    opacity: 0.7,
  },
})

const Label = styled.span(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  color: theme.colors.text,
}))

const Icon = styled.div<{ src: string }>(({ src }) => ({
  flex: '0 0 24px',
  height: '24px',
  background: `url("${src}")`,
  backgroundSize: 'cover',
}))

export function PageTitle({
  iconUrl,
  children,
}: {
  iconUrl?: string
  children: ReactNode
}) {
  const hasIcon = !!iconUrl

  return (
    <Container href="/">
      {hasIcon && <Icon src={iconUrl!} />}
      {hasIcon && <Spacer size={10} />}
      <Label>{children}</Label>
    </Container>
  )
}
