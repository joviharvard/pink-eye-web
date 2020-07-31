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
import Rating from '../../components/Rating'
import theme from '../../theme'

const SingleReview = ({ location }) => {
  const history = useHistory()
  const { body, screencap, rating } = location.state.review
  return (
    <Container>
      <HeaderContainer>
        <PrimaryButton
          text="BACK"
          width="120px"
          onClick={() => history.goBack()}
        />
        <div style={{ background: theme.colors.blue, padding: '0px 20px' }}>
          <Rating rating={rating} invert />
        </div>
      </HeaderContainer>
      <ScreenCapContainer>
        <ScreenCap src={screencap.url} />
      </ScreenCapContainer>
      <Body>{body}</Body>
    </Container>
  )
}

export default SingleReview
