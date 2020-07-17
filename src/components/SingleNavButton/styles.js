import styled, { keyframes } from 'styled-components'

const rotateIn = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }

  to {
    transform: rotate(135deg) scale(0.8);
  }
`
const rotateOut = keyframes`
from {
  transform: rotate(135deg) scale(0.8);
}

to {
  transform: rotate(0deg) scale(1);
}
`

const doNothing = keyframes`
from {
  transform: rotate(0deg) scale(1);
}

to {
  transform: rotate(0deg) scale(1);
}
`

export const ButtonContainer = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  color: ${({ textColor }) => textColor};
  font-family: ${({ theme }) => theme.fonts.subheader};
  font-size: 18px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  &:hover {
    color: ${({ hoverText }) => hoverText};
    background-color: ${({ hoverColor }) => hoverColor};
    transition: background-color 0.35s ease;
  }
`

export const ButtonBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(${({ src }) => src}) no-repeat content-box center;
  background-size: 160px 160px;
  ${ButtonContainer}:hover & {
    background: url(${({ hover }) => hover}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.2s ease-out;
  }
  padding: 6px;
`
export const Knob = styled(ButtonBackground)`
  border: none;
  border-radius: 50%;
  align-self: center;
  animation: ${({ wasPrev }) => {
      return wasPrev ? rotateOut : doNothing
    }}
    0.6s ease forwards;
  ${ButtonContainer}:hover & {
    display: block;
    animation: ${rotateIn} 0.35s ease forwards;
    padding: 0px;
    transition: padding 0.35s ease-out;
  }
`

export const KnobSelected = styled(ButtonBackground)`
  border: none;
  border-radius: 50%;
  align-self: center;
  animation: ${rotateIn} 0s ease forwards;
  padding: 0px;
`

export const Text = styled.p`
  position: absolute;
  user-select: none;
`
