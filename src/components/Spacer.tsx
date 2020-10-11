import styled from 'styled-components'

type Props = {
  size?: number
  responsiveSize?: { [key: string]: number }
}

export default styled.div<Props>(({ size, responsiveSize = {} }) => {
  return {
    flex: typeof size === 'number' ? `0 0 ${size}px` : `1 1 0%`,
    ...Object.fromEntries(
      Object.entries(responsiveSize).map(([key, value]) => [
        `@media (max-width: ${key})`,
        { flex: `0 0 ${value}px` },
      ])
    ),
  }
})
