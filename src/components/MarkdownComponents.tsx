import React from 'react'
import styled, { CSSObject } from 'styled-components'
import { Theme } from '../foundation/theme'
import { Link } from './Link'

export const code = styled.pre(({ theme }) => ({
  ...theme.textStyles.code,
  backgroundColor: theme.colors.divider,
  padding: '10px',
  marginBottom: '8px',
}))

export const inlineCode = styled.code(({ theme }) => ({
  ...theme.textStyles.code,
  backgroundColor: theme.colors.divider,
  padding: '1px 3px',
}))

export const h1 = styled.h1(({ theme }) => ({
  ...theme.textStyles.heading1,
  marginBottom: '8px',
}))

export const h2 = styled.h2(({ theme }) => ({
  ...theme.textStyles.heading2,
  marginBottom: '8px',

  [`${h1} + &`]: {
    marginTop: '24px',
  },
}))

export const h3 = styled.h3(({ theme }) => ({
  ...theme.textStyles.heading3,
  marginBottom: '8px',

  [`${h1} + &, ${h2} + &`]: {
    marginTop: '24px',
  },
}))

const headingMargins = (theme: Theme): CSSObject => ({
  [`${h1} + &, ${h2} + &, ${h3} + &`]: {
    marginTop: '4px',
  },

  [`& + ${h1}, & + ${h2}, & + ${h3}`]: {
    marginTop: '24px',
    marginBottom: '8px',
  },
})

export const p = styled.p(({ theme }) => ({
  ...theme.textStyles.regular,

  marginBottom: '8px',

  ...headingMargins(theme),
}))

const Anchor = styled(Link)(({ theme }) => ({
  ...theme.textStyles.regular,
  color: theme.colors.editableText,
}))

const PageLink = styled(Link)(({ theme }) => ({
  ...theme.textStyles.regular,
  fontWeight: 500,
  color: theme.colors.editableText,
  background: theme.colors.blockBackground,
  textDecoration: 'none',

  display: 'block',
  padding: '8px 12px',
  marginBottom: '8px',

  '&:hover': {
    opacity: 0.7,
  },

  '&:active': {
    opacity: 0.85,
  },

  '&::before': {
    content: '→  ',
    whiteSpace: 'pre',
  },

  [`& + ${h1}, & + ${h2}, & + ${h3}`]: {
    marginTop: '30px',
  },
}))

export const thematicBreak = styled.hr({})

export const a = (props: React.HTMLAttributes<HTMLAnchorElement>) => {
  const isPage = (props.className || '').split(' ').includes('page')

  return isPage ? <PageLink {...props} /> : <Link {...props} />
}

const TokenBlock = styled.div(({ theme }) => ({
  padding: '12px',
  display: 'flex',
  flexDirection: 'row',
  background: theme.colors.blockBackground,
  marginBottom: '8px',

  ...headingMargins(theme),
}))

const tokenPreviewStyles = (theme: Theme): CSSObject => ({
  width: '60px',
  height: '60px',
  marginRight: '8px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.divider}`,
  background: theme.colors.contentBackground,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
})

const ColorTokenPreview = styled.div(({ theme }) => tokenPreviewStyles(theme))

const ShadowTokenPreview = styled.div(({ theme }) => tokenPreviewStyles(theme))

const ShadowTokenPreviewBoxDiagram = styled.div(({ theme }) => ({
  width: '24px',
  height: '24px',
  background: theme.colors.contentBackground,
}))

const TextStyleTokenPreview = styled.div(({ theme }) => ({
  ...tokenPreviewStyles(theme),
  width: '120px',
}))

const UnknownTokenPreview = styled.div({})

const TokenDetails = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '.lona-token-name': {
    ...theme.textStyles.small,
    fontWeight: 700,
  },

  '.lona-token-value': {
    ...theme.textStyles.small,
    color: theme.colors.textMuted,
  },
}))

export const div = (props: {
  className?: string
  'data-color'?: string
  'data-fontFamily'?: string
  'data-fontWeight'?: string
  'data-fontSize'?: string
  'data-letterSpacing'?: string
  'data-lineHeight'?: string
  'data-x'?: string
  'data-y'?: string
  'data-blur'?: string
  'data-radius'?: string
}) => {
  const { className } = props

  if (!className) {
    return <div {...props} />
  }

  const classNames = className.split(' ')

  if (classNames.includes('lona-token')) {
    return <TokenBlock {...props} />
  }

  if (classNames.includes('lona-token-preview')) {
    const type = classNames[1].replace('lona-token-preview-', '')

    switch (type) {
      case 'color': {
        const { 'data-color': color, ...rest } = props

        return (
          <ColorTokenPreview
            style={{
              backgroundColor: color,
            }}
            {...props}
          />
        )
      }
      case 'textStyle': {
        const {
          'data-fontFamily': fontFamily,
          'data-fontWeight': fontWeight,
          'data-fontSize': fontSize,
          'data-color': color,
          'data-letterSpacing': letterSpacing,
          'data-lineHeight': lineHeight,
          ...rest
        } = props

        return (
          <TextStyleTokenPreview
            style={{
              fontFamily,
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight ? parseInt(fontWeight) : 400,
              letterSpacing,
              lineHeight,
              color,
            }}
            {...rest}
          >
            Style
          </TextStyleTokenPreview>
        )
      }
      case 'shadow':
      case 'textStyle': {
        const {
          'data-x': x = 0,
          'data-y': y = 0,
          'data-blur': blur = 0,
          'data-radius': radius = 0,
          'data-color': color = 'black',
          ...rest
        } = props

        return (
          <ShadowTokenPreview {...rest}>
            <ShadowTokenPreviewBoxDiagram
              style={{
                boxShadow: `${x}px ${y}px ${blur}px ${radius}px ${color}`,
              }}
            />
          </ShadowTokenPreview>
        )
      }
      default:
        return <UnknownTokenPreview {...props} />
    }
  }

  if (classNames.includes('lona-token-details')) {
    return <TokenDetails {...props} />
  }

  return <div {...props} />
}