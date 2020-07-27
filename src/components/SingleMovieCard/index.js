import React from 'react'
import Rating from '../Rating'
import { Container, InfoBox, Title, Director, Reviewer } from './styles'

const SingleMovieCard = ({
  metaData: { movieTitle, director, rating, reviewer },
}) => (
  <Container>
    <InfoBox>
      <Title class="unselectable"> {movieTitle} </Title>
      <Director class="unselectable">directed by {director}</Director>
      <Rating rating={rating} />
      <Reviewer style={{ fontSize: '12px' }} class="unselectable">
        reviewed by
      </Reviewer>
      <Reviewer>{reviewer}</Reviewer>
    </InfoBox>
  </Container>
)

export default SingleMovieCard
