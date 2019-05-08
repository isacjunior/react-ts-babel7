import React from 'react'

interface WelcomeProps {
  message: string,
}

const Welcome = ({ message }: WelcomeProps): JSX.Element =>
  <h1>Hello, {message}</h1>

export default Welcome
