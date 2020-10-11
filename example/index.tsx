import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  Button,
  Link,
  Select,
  LinkContext,
  SidebarItem,
  LinkProps,
  Page,
  MarkdownComponents,
} from '@lona/site-components'

const tree: SidebarItem = {
  name: 'Home',
  url: '/',
  children: [
    {
      name: 'Page 1',
      url: '/page1',
      children: [
        {
          name: 'Page 4',
          url: '/page4',
          children: [{ name: 'Page 5', url: '/page5', children: [] }],
        },
      ],
    },
    { name: 'Page 2', url: '/page2', children: [] },
    { name: 'Page 3', url: '/page3', children: [] },
    { name: 'Page 6', url: '/page6', children: [] },
  ],
}

const FakeLink = (props: LinkProps) => <a {...props} href="/" />

function App() {
  return (
    <LinkContext.Provider value={FakeLink}>
      <ThemeProvider theme={defaultTheme}>
        <Page
          title={'Home'}
          rootItem={tree}
          iconUrl={'https://www.sourcenoteapp.com/favicon.ico'}
          showArtifactsLink={false}
          isSelected={(pathname) => pathname === '/page5'}
          isDescendantSelected={(pathname) =>
            pathname === '/page1' || pathname === '/page4'
          }
        >
          <MarkdownComponents.h1>Heading 1</MarkdownComponents.h1>
          <MarkdownComponents.p>
            Paragraph with{' '}
            <MarkdownComponents.a>normal link</MarkdownComponents.a>
          </MarkdownComponents.p>
          <MarkdownComponents.a className="page">
            Page Link 1
          </MarkdownComponents.a>
          <MarkdownComponents.a className="page">
            Page Link 2
          </MarkdownComponents.a>
          <MarkdownComponents.h2>Heading 2</MarkdownComponents.h2>
          <MarkdownComponents.p>Paragraph</MarkdownComponents.p>
          <MarkdownComponents.h3>Heading 3</MarkdownComponents.h3>
          <MarkdownComponents.p>
            Paragraph with{' '}
            <MarkdownComponents.inlineCode>
              inline code
            </MarkdownComponents.inlineCode>
          </MarkdownComponents.p>
          <MarkdownComponents.code>Code block</MarkdownComponents.code>
          <MarkdownComponents.p>Paragraph</MarkdownComponents.p>
          <MarkdownComponents.h2>Other Components</MarkdownComponents.h2>
          <Button>Click me!</Button>
          <MarkdownComponents.thematicBreak />
          <Link href="/">A link!</Link>
          <MarkdownComponents.thematicBreak />
          <Select>
            <option>npm</option>
            <option>yarn</option>
          </Select>
        </Page>
      </ThemeProvider>
    </LinkContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
