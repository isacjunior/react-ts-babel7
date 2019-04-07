import React, { FC } from 'react'

type WelcomeProps = {
  message: string
}

const Welcome: FC<WelcomeProps> = ({ message }) => <h1>Hello, {message}</h1>

export default Welcome