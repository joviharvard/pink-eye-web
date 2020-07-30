import React from 'react'
import { useHistory } from 'react-router-dom'
import { UnderConstruction, InnerBox } from './styles'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { ROUTE_PATHS } from '../../utils/constants'

const Merch = () => {
  const history = useHistory()
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
      <InnerBox onClick={() => history.push(ROUTE_PATHS.HOME)}>
        <UnderConstruction />
        <PrimaryButton
          text="BACK TO HOME"
          width="40%"
          style={{ position: 'absolute', zIndex: 1 }}
          onClick={() => history.push(ROUTE_PATHS.HOME)}
        />
      </InnerBox>
    </div>
  )
}

export default Merch
