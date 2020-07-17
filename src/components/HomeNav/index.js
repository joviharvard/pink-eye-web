import React from 'react'
import { ButtonContainer, ButtonBackground } from './styles'

const HomeNav = ({ onClick, isSelected, wasPrev }) => {
  return (
    <ButtonContainer onClick={() => onClick()}>
      <ButtonBackground isSelected={isSelected} wasPrev={wasPrev} />
    </ButtonContainer>
  )
}

export default HomeNav
