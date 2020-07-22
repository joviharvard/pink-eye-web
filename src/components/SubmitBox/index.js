import React from 'react'
import { Container, HeaderBox, Header, Body } from './styles'

const SubmitBox = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <HeaderBox>
        <Header>SUBMIT</Header>
      </HeaderBox>
      <Body>
        If you've ever watched a movie and... well, enjoyed it -- consider
        writing about it! We're open to any sort of submissions. Fill out this
        short form listing the movie you watched, the rating you'd give it, and
        a short sentence or two about why! That's really all there is to it.
        Leave your email and we'll contact you if we want you to submit a full
        article.
      </Body>
    </Container>
  )
}

export default SubmitBox
