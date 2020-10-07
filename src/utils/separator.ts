export default function withSeparator<T>(
  array: T[],
  makeSeparator: (index: number, isLast: boolean) => T,
  options: { leading?: boolean; trailing?: boolean } = {}
) {
  return array.reduce((result: T[], item: T, index: number) => {
    // Push leading separator
    if (index === 0 && options.leading) {
      result.push(makeSeparator(0, false))
    }

    result.push(item)

    // Push trailing separator
    if (index !== array.length - 1 || options.trailing) {
      const separatorIndex = (options.leading ? 1 : 0) + index
      result.push(makeSeparator(separatorIndex, index === array.length - 1))
    }

    return result
  }, [])
}
