import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  Button,
  Link,
  Title,
  Select,
  GlobalStyles,
  Tree,
  LinkContext,
  Sidebar,
} from '@lona/site-components'

const tree: Tree = {
  name: 'Home',
  url: '/',
  children: [
    { name: 'Page 1', url: '/page1', children: [] },
    { name: 'Page 2', url: '/page2', children: [] },
    { name: 'Page 3', url: '/page3', children: [] },
  ],
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Title iconUrl={'https://www.sourcenoteapp.com/favicon.ico'}>
        A title
      </Title>
      <Button>Click me!</Button>
      <Link href="/">A link!</Link>
      <Select>
        <option>npm</option>
        <option>yarn</option>
      </Select>
      <Sidebar
        title={'Home'}
        fileTree={tree}
        iconUrl={'https://www.sourcenoteapp.com/favicon.ico'}
        showArtifactsLink={false}
        isSelected={(pathname) => pathname === 'Page 1'}
        isDescendantSelected={() => false}
      />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
