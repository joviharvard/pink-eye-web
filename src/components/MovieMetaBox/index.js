import React from 'react'
import {
  Container,
  HeaderBox,
  Header,
  Body,
  Rating,
  InfoContainer,
} from './styles'
import { regions } from './constants'

const MovieMetaBox = ({ location, ...rest }) => {
  const {
    movieTitle,
    rating,
    director,
    reviewer,
    region,
  } = location.state.review

  return (
    <Container {...rest}>
      <HeaderBox>
        <Header>{movieTitle}</Header>
      </HeaderBox>
      <InfoContainer>
        <Body>DIRECTOR: {director}</Body>
        <Body>REVIEWER: {reviewer}</Body>
        <Body>REGION: {regions[region]}</Body>
        <Rating>{rating}</Rating>
      </InfoContainer>
    </Container>
  )
}

export default MovieMetaBox
