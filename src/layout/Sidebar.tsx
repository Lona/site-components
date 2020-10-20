import React from 'react'
import styled from 'styled-components'
import withSeparator from '../utils/separator'
import { Link } from '../components/Link'
import Spacer from '../components/Spacer'
import { PageTitle } from './PageTitle'

export type SidebarItem = {
  name: string
  url: string
  children: SidebarItem[]
}

const Container = styled.div(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  borderRight: `1px solid ${theme.colors.divider}`,
  background: theme.colors.background,
  paddingBottom: '12px',
  overflowY: 'auto',
}))

const InnerWrapper = styled.div({
  overflowY: 'auto',
})

const NavigationWrapper = styled.nav({
  flex: '0 0 auto',
})

const NavigationItemList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
})

const TitleWrapper = styled.div(({ theme }) => ({
  minHeight: '64px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: `${theme.spacing.sidebar.paddingHorizontal}px`,
  paddingRight: `${theme.spacing.small}px`,
}))

const NavigationItem = styled(Link)<{ selected: boolean; depth: number }>(
  ({ theme, selected, depth }) => ({
    ...(selected ? theme.textStyles.regularBold : theme.textStyles.regular),
    color: theme.colors.text,
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    paddingLeft: `${
      theme.spacing.sidebar.paddingHorizontal + Math.max(depth - 1, 0) * 20
    }px`,
    paddingRight: `${theme.spacing.small}px`,

    '&:hover': {
      background: theme.colors.divider,
    },
  })
)

const SubsectionHeader = styled.span<{ selected: boolean }>``

const Bullet = styled.span({
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: '3px',
  backgroundColor: '#525252',
  marginLeft: '2px',
})

interface SidebarItemProps {
  item: SidebarItem
  depth?: number
  isSelected: (pathname: string) => boolean
  isDescendantSelected: (pathname: string) => boolean
}

const SidebarItemComponent = ({
  item: { name, children, url },
  depth = 0,
  isSelected,
  isDescendantSelected,
}: SidebarItemProps) => {
  const selected = isSelected(url)
  const descendantSelected = isDescendantSelected(url)

  return (
    <>
      <NavigationItem href={url} selected={selected} depth={depth}>
        {depth > 0 && (
          <>
            <Bullet />
            <Spacer size={10} />
          </>
        )}
        <SubsectionHeader selected={selected}>{name}</SubsectionHeader>
      </NavigationItem>
      {/* Always show the first level of descendants, but hide the rest unless something is selected */}
      {children.length > 0 && (depth === 0 || descendantSelected) ? (
        <ul>
          {children.map((file) => (
            <SidebarItemComponent
              key={file.name}
              item={file}
              depth={depth + 1}
              isSelected={isSelected}
              isDescendantSelected={isDescendantSelected}
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}

export interface SidebarProps {
  rootItem: SidebarItem
  title: string
  iconUrl?: string
  showArtifactsLink?: boolean
  isSelected: (pathname: string) => boolean
  isDescendantSelected: (pathname: string) => boolean
}

export function maxDepth(tree: SidebarItem): number {
  function inner(tree: SidebarItem, depth: number): number {
    if (tree.children.length === 0) return depth

    return Math.max(...tree.children.map((child) => inner(child, depth + 1)))
  }

  return inner(tree, 1)
}

export function Sidebar({
  rootItem,
  title,
  iconUrl,
  showArtifactsLink,
  isSelected,
  isDescendantSelected,
}: SidebarProps) {
  const files = rootItem.children
  const rootDepth = maxDepth(rootItem)

  return (
    <Container>
      <Spacer size={40} />
      <TitleWrapper>
        <PageTitle iconUrl={iconUrl}>{title}</PageTitle>
      </TitleWrapper>
      <Spacer size={16} />
      <InnerWrapper>
        <NavigationWrapper aria-label="Primary navigation">
          <NavigationItemList>
            {withSeparator(
              files.map((file) => (
                <SidebarItemComponent
                  key={file.name}
                  item={file}
                  isSelected={isSelected}
                  isDescendantSelected={isDescendantSelected}
                />
              )),
              (index) => (
                <Spacer
                  key={`separator-${index}`}
                  size={rootDepth > 1 ? 12 : 4}
                />
              )
            )}
          </NavigationItemList>
        </NavigationWrapper>
      </InnerWrapper>
      <Spacer size={16} />
      {showArtifactsLink ? (
        <SidebarItemComponent
          item={{
            name: 'Design System Artifacts',
            url: 'lona-design-artifacts',
            children: [],
          }}
          isSelected={isSelected}
          isDescendantSelected={isDescendantSelected}
        />
      ) : null}
    </Container>
  )
}
