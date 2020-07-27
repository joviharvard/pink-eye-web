import React from 'react'
import { Container, Text, Indicator } from './styles'

const SelectorButton = ({ indicator, name, onClick }) => (
  <Container onClick={() => onClick()}>
    <Text>{name}</Text>
    <Indicator>{indicator}</Indicator>
  </Container>
)

export default SelectorButton
