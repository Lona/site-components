import React from 'react'
import styled from 'styled-components'
import path from 'path'

import { upperFirst } from '../utils/format'
import { maxDepth, Tree } from '../utils/tree'
import Spacer from './Spacer'
import withSeparator from '../utils/separator'
import { Title } from './Title'
import { Link } from './Link'
import { defaultTheme } from '../foundation/theme'
const { colors, spacing, textStyles, sizes } = defaultTheme

const Wrapper = styled.nav`
  position: sticky;
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  flex: 0 0 300px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  border-right: 1px solid ${colors.divider};
  background: ${colors.background};
  padding-bottom: 12px;

  @media (max-width: ${sizes.breakpoints.medium}) {
    flex: 0 0 260px;
  }
`

const InnerWrapper = styled.div`
  overflow-y: auto;
`

const NavigationWrapper = styled.nav`
  flex: 0 0 auto;
`

const NavigationItem = styled(Link)<{ selected: boolean; depth: number }>`
  ${(props) => (props.selected ? textStyles.regularBold : textStyles.regular)};
  height: 36px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: ${(props) =>
    `${
      spacing.sidebar.paddingHorizontal + Math.max(props.depth - 1, 0) * 20
    }px`};

  &:hover {
    background: ${colors.divider};
  }
`

const SubsectionHeader = styled.span<{ selected: boolean }>``

function formatName(name: string) {
  return upperFirst(decodeURIComponent(path.basename(name)))
}

const Bullet = styled.span({
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: '3px',
  backgroundColor: '#525252',
  marginLeft: '2px',
})

interface SidebarItemProps {
  item: Tree
  depth?: number
  isSelected: (pathname: string) => boolean
  isDescendantSelected: (pathname: string) => boolean
}

const SidebarItem = ({
  item: { name, children, url },
  depth = 0,
  isSelected,
  isDescendantSelected,
}: SidebarItemProps) => {
  const selected = isSelected(name)
  const descendantSelected = isDescendantSelected(name)

  return (
    <>
      <NavigationItem
        href={`/${url || name}`}
        selected={selected}
        depth={depth}
      >
        {depth > 0 && (
          <>
            <Bullet />
            <Spacer size={10} />
          </>
        )}
        <SubsectionHeader selected={selected}>
          {formatName(name)}
        </SubsectionHeader>
      </NavigationItem>
      {/* Always show the first level of descendants, but hide the rest unless something is selected */}
      {children.length > 0 && (depth === 0 || descendantSelected) ? (
        <ul>
          {children.map((file) => (
            <SidebarItem
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

interface SidebarProps {
  fileTree: Tree
  title: string
  iconUrl?: string
  showArtifactsLink?: boolean
  isSelected: (pathname: string) => boolean
  isDescendantSelected: (pathname: string) => boolean
}

export function Sidebar({
  fileTree,
  title,
  iconUrl,
  showArtifactsLink,
  isSelected,
  isDescendantSelected,
}: SidebarProps) {
  const files = fileTree.children

  // If we only have an index page, don't render the sidebar
  if (files.length === 0) return null

  const treeDepth = maxDepth(fileTree)

  return (
    <Wrapper>
      <div>
        <Spacer size={40} />
        <div
          style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: `${spacing.sidebar.paddingHorizontal}px`,
          }}
        >
          <Title iconUrl={iconUrl}>{title}</Title>
        </div>
        <Spacer size={16} />
        <InnerWrapper>
          <NavigationWrapper aria-label="Primary navigation">
            <ul>
              {withSeparator(
                files.map((file) => (
                  <SidebarItem
                    key={file.name}
                    item={file}
                    isSelected={isSelected}
                    isDescendantSelected={isDescendantSelected}
                  />
                )),
                (index) => (
                  <Spacer
                    key={`separator-${index}`}
                    size={treeDepth > 1 ? 12 : 4}
                  />
                )
              )}
            </ul>
          </NavigationWrapper>
        </InnerWrapper>
        <Spacer size={16} />
      </div>
      {showArtifactsLink ? (
        <SidebarItem
          item={{
            name: 'Design System Artifacts',
            url: 'lona-design-artifacts',
            children: [],
          }}
          isSelected={isSelected}
          isDescendantSelected={isDescendantSelected}
        />
      ) : null}
    </Wrapper>
  )
}
