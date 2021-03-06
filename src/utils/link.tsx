import React, { CSSProperties } from 'react'
import { createContext, useContext } from 'react'

export interface LinkProps {
  href?: string
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

export type LinkComponent = (props: LinkProps) => JSX.Element | null

const DefaultLinkComponent = (props: LinkProps) => <a {...props} />

export const LinkContext = createContext<LinkComponent>(DefaultLinkComponent)

export const useLink = () => useContext(LinkContext)
