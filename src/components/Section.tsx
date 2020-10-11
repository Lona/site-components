import React from 'react'
import styled from 'styled-components'

const Main = styled.main(({ theme }) => ({
  color: theme.colors.text,
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

const Wrapper = styled.section({
  flex: '1 1 auto',
  margin: '0',
  height: '100vh',
  overflowY: 'scroll',
})

export function Section(props: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Main {...props} />
    </Wrapper>
  )
}
