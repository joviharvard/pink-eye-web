import React from 'react'
import {
  ButtonContainer,
  ButtonBackground,
  Text,
  Knob,
  KnobSelected,
} from './styles'
import blueButton from '../../assets/images/blueButton.png'
import greenButton from '../../assets/images/greenButton.png'
import pinkButton from '../../assets/images/pinkButton.png'
import blueKnob from '../../assets/images/blueKnob.png'
import greenKnob from '../../assets/images/greenKnob.png'
import pinkKnob from '../../assets/images/pinkKnob.png'
import theme from '../../theme'

const getButtonStyle = color => {
  switch (color) {
    case 'pink':
      return {
        button: pinkButton,
        knob: pinkKnob,
        textColor: theme.colors.pink,
        hover: greenButton,
        hoverKnob: greenKnob,
        hoverText: theme.colors.lightGreen,
      }
    case 'blue':
      return {
        button: blueButton,
        knob: blueKnob,
        textColor: theme.colors.blue,
        hover: pinkButton,
        hoverKnob: pinkKnob,
        hoverText: theme.colors.pink,
      }
    default:
      return {
        button: greenButton,
        knob: greenKnob,
        textColor: theme.colors.green,
        hover: blueButton,
        hoverKnob: blueKnob,
        hoverText: theme.colors.blue,
      }
  }
}

const SingleNavButton = ({
  outlineColor,
  backgroundColor,
  hoverColor,
  text,
  onClick,
  isSelected,
  wasPrev,
}) => {
  const {
    button,
    knob,
    textColor,
    hover,
    hoverKnob,
    hoverText,
  } = getButtonStyle(outlineColor)
  return isSelected ? (
    <ButtonContainer
      textColor={hoverText}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      hoverText={hoverText}
      onClick={() => onClick()}
    >
      <Text>{text}</Text>
      <ButtonBackground
        draggable={false}
        src={hover}
        hover={hover}
      />
      <KnobSelected
        draggable={false}
        src={hoverKnob}
        hover={hoverKnob}
      />
    </ButtonContainer>
  ) : (
    <ButtonContainer
      textColor={textColor}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      hoverText={hoverText}
      onClick={() => onClick()}
    >
      <Text>{text}</Text>
      <ButtonBackground
        draggable={false}
        src={button}
        hover={hover}
      />
      <Knob
        draggable={false}
        src={knob}
        hover={hoverKnob}
        wasPrev={wasPrev}
      />
    </ButtonContainer>
  )
}

export default SingleNavButton
