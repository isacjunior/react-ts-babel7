import React from 'react'

type WelcomeProps = {
  message: string
}

const Welcome: React.SFC<WelcomeProps> = ({ message }) => <h1>Hello, {message}</h1>

export default Welcome