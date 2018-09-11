import React from 'react'
import { render } from 'react-dom'

type AppProps = {
  message: string;
}

const App = ({ message }: AppProps) => (
  <>
    <h1>{message}</h1>
  </>
)

render(
  <App message="Babel 7 with Typescript" />,
  document.getElementById('root'),
)
