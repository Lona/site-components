# Site Components

Lona uses these components on generated websites.

Some day, they'll be replacable by the developer for custom theming.

## API

See the [example](/example) for usage.

In order to support websites powered by Next, Gatsby, etc, you'll likely want to provide a custom `Link` component via the `LinkContext`. For example:

```js
import { LinkContext, LinkProps } from '@lona/site-components'

// This is the default Link component
const Link = (props: LinkProps) => <a {...props} />

function App() {
  return (
    <LinkContext.Provider value={Link}>
      {/* Your components here */}
    </LinkContext.Provider>
  )
}
```

You can optionally modify the `href` prop if needed, or use it to determine which component to render (e.g. for internal vs external urls).
