import React from 'react'
import { UnderConstruction, InnerBox } from './styles'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'

const Merch = () => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.darkBlue,
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InnerBox>
        <UnderConstruction />
        <PrimaryButton
          text="BACK TO HOME"
          width="40%"
          style={{ position: 'absolute', zIndex: 1 }}
        />
      </InnerBox>
    </div>
  )
}

export default Merch
