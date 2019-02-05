import React, { Component } from 'react'

type Props = {
  message?: 'Hello' | 'Olá'
}

class App extends Component<Props> {

  static defaultProps = {
    message: 'Hello TypeScript'
  }

  render() {
    const { message } = this.props
  
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default App
