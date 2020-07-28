import React from 'react'
import { Container, Text } from './styles'

const PrimaryButton = ({ onClick, text, ...rest }) => (
  <Container onClick={() => onClick()} {...rest}>
    <Text {...rest}>{text}</Text>
  </Container>
)

export default PrimaryButton
