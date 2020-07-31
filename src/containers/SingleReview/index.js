import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  HeaderContainer,
  ScreenCapContainer,
  ScreenCap,
  Body,
} from './styles'
import PrimaryButton from '../../components/PrimaryButton'

const SingleReview = ({ location }) => {
  const history = useHistory()
  const {
    body,
    screencap,
  } = location.state.review
  return (
    <Container>
      <HeaderContainer>
        <PrimaryButton
          text="BACK"
          width="120px"
          onClick={() => history.goBack()}
        />
      </HeaderContainer>
      <ScreenCapContainer>
        <ScreenCap src={screencap.url} />
      </ScreenCapContainer>
      <Body>{body}</Body>
    </Container>
  )
}

export default SingleReview
