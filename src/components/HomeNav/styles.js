import styled, { keyframes } from 'styled-components'
import hoverEye from '../../assets/images/hoverEye.png'
import pinkEye from '../../assets/images/pinkEye.png'
import clickedEye from '../../assets/images/clickedEye.png'

const flickerToRed = keyframes`
  from {
    background: url(${clickedEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.0.5s ease;
  }
  to {
    background: url(${hoverEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.05s ease;
  }
`

const flickerToPink = keyframes`
  from {
    background: url(${clickedEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.05s ease;
  }
  to {
    background: url(${pinkEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.05s ease;
  }
`

const doNothing = keyframes`
  from {}
  to {}
`

export const ButtonContainer = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  font-size: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`

export const ButtonBackground = styled.div`
  background: url(${({ isSelected }) => (isSelected ? hoverEye : pinkEye)})
    no-repeat content-box center;
  background-size: 160px 160px;
  transition: background 0.4s ease-in;
  animation: ${({ isSelected, wasPrev }) => {
      if (wasPrev) return flickerToPink
      if (isSelected) return flickerToRed
      return doNothing
    }}
    0.45s ease-out;
  width: 100%;
  height: 100%;
  position: absolute;
  ${ButtonContainer}:hover & {
    background: url(${hoverEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.4s ease-out;
  }
  ${ButtonContainer}:active & {
    background: url(${clickedEye}) no-repeat content-box center;
    background-size: 160px 160px;
    transition: background 0.15s ease-out;
  }
`
