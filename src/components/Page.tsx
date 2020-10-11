import React, { ReactNode } from 'react'
import styled from 'styled-components'
// import { Section } from './Section'

import { SidebarProps, Sidebar } from './Sidebar'

const Container = styled.div({
  display: 'flex',
  flex: '1 1 auto',
  alignItems: 'stretch',
})

const SidebarContainer = styled.nav(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  height: '100vh',
  width: '300px',
  [`@media (max-width: ${theme.sizes.breakpoints.medium})`]: {
    width: '260px',
  },
}))

const Main = styled.main(({ theme }) => ({
  flex: '1 1 auto',
  color: theme.colors.text,
  marginLeft: '300px',

  [`@media (max-width: ${theme.sizes.breakpoints.medium})`]: {
    marginLeft: '260px',
  },

  [`@media (max-width: ${theme.sizes.breakpoints.small})`]: {
    marginLeft: '260px',
  },
}))

const Section = styled.section(({ theme }) => ({
  flex: '1 1 auto',
  padding: '120px 60px',
  maxWidth: '1120px',
  margin: '0 auto',

  [`@media (max-width: ${theme.sizes.breakpoints.medium})`]: {
    maxWidth: '960px',
  },

  [`@media (max-width: ${theme.sizes.breakpoints.small})`]: {
    maxWidth: '800px',
  },
}))

interface PageProps extends SidebarProps {
  children?: ReactNode
}

export function Page(props: PageProps) {
  const {
    children,
    title,
    rootItem,
    iconUrl,
    showArtifactsLink,
    isSelected,
    isDescendantSelected,
  } = props

  return (
    <Container>
      <SidebarContainer>
        <Sidebar
          title={title}
          rootItem={rootItem}
          iconUrl={iconUrl}
          showArtifactsLink={showArtifactsLink}
          isSelected={isSelected}
          isDescendantSelected={isDescendantSelected}
        />
      </SidebarContainer>
      <Main>
        <Section>{children}</Section>
      </Main>
    </Container>
  )
}
