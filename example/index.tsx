import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, Button } from '@lona/site-components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Click me!</Button>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
