import React from 'react'
import { useLink, LinkProps } from '../utils/link'

export function Link(props: LinkProps) {
  const LinkComponent = useLink()

  return <LinkComponent {...props} />
}
