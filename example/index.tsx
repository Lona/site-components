import {
  Anchor,
  Button,
  Code,
  defaultTheme,
  Heading1,
  Heading2,
  Heading3,
  InlineCode,
  Link,
  LinkContext,
  LinkProps,
  Page,
  Paragraph,
  Select,
  SidebarItem,
  ThematicBreak,
} from '@lona/site-components'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

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
          <Heading1>Heading 1</Heading1>
          <Paragraph>
            Paragraph with <Anchor>normal link</Anchor>
          </Paragraph>
          <Anchor className="page">Page Link 1</Anchor>
          <Anchor {...{ class: 'page' }}>Page Link 2</Anchor>
          <Heading2>Heading 2</Heading2>
          <Paragraph>Paragraph</Paragraph>
          <Heading3>Heading 3</Heading3>
          <Paragraph>
            Paragraph with <InlineCode>inline code</InlineCode>
          </Paragraph>
          <Code>Code block</Code>
          <Paragraph>Paragraph</Paragraph>
          <Heading2>Other Components</Heading2>
          <Button>Click me!</Button>
          <ThematicBreak />
          <Link href="/">A link!</Link>
          <ThematicBreak />
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
