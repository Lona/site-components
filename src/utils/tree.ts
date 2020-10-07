export type Tree = {
  name: string
  url?: string
  children: Tree[]
}

type File = {
  inputPath: string
  children: { inputPath: string }[]
}

export function buildFileTree(files: File[]): Tree | null {
  const rootFile = files.find((x) => x.inputPath === 'README.md')

  if (!rootFile) {
    console.warn('Cannot find the root page')
    return null
  }

  function buildTree(node: File): Tree {
    return {
      name: node!.inputPath.replace(/README\.md$/, '').replace(/\.md$/, ''),
      children: node.children
        .filter((file) => !!file && !!file.inputPath)
        .sort((a, b) => (b.inputPath > a.inputPath ? -1 : 1))
        .map((file) => files.find((x) => x.inputPath === file.inputPath))
        .filter((file) => !!file)
        .map((file) => buildTree(file!)),
    }
  }

  return buildTree(rootFile)
}

export function maxDepth(tree: Tree): number {
  function inner(tree: Tree, depth: number): number {
    if (tree.children.length === 0) return depth

    return Math.max(...tree.children.map((child) => inner(child, depth + 1)))
  }

  return inner(tree, 1)
}
