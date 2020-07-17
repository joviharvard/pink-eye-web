import React from 'react'
import { Container, Text, Eye, SelectedEye } from './styles'

const SingleFilter = ({ selected, name, onClick }) => (
  <Container selected={selected} onClick={() => onClick()}>
    <Text>{name}</Text>
    {selected ? <SelectedEye /> : <Eye />}
  </Container>
)

export default SingleFilter
