import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Sidebar, SidebarProps } from './Sidebar'

const Container = styled.div({
  display: 'flex',
  flex: '1 1 auto',
})

const FixedSidebar = styled.nav(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  height: '100vh',
  width: theme.sizes.sidebar.large,
  [`@media (max-width: ${theme.sizes.breakpoints.medium})`]: {
    width: theme.sizes.sidebar.medium,
  },
}))

const SidebarSpacer = styled.div(({ theme }) => ({
  width: theme.sizes.sidebar.large,
  [`@media (max-width: ${theme.sizes.breakpoints.medium})`]: {
    width: theme.sizes.sidebar.medium,
  },
}))

const Main = styled.main(({ theme }) => ({
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

  const showSidebar = rootItem.children.length > 0

  return (
    <Container>
      {showSidebar && (
        <>
          <FixedSidebar>
            <Sidebar
              title={title}
              rootItem={rootItem}
              iconUrl={iconUrl}
              showArtifactsLink={showArtifactsLink}
              isSelected={isSelected}
              isDescendantSelected={isDescendantSelected}
            />
          </FixedSidebar>
          <SidebarSpacer />
        </>
      )}
      <Main>{children}</Main>
    </Container>
  )
}
