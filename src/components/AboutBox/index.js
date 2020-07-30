/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, HeaderBox, Header, Subheader, Body } from './styles'

const AboutBox = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <HeaderBox>
        <Header>ABOUT US</Header>
        <Subheader>PINK EYE MOVIE GOERS</Subheader>
      </HeaderBox>
      <Body>
        We love movies. This is just a platform for us to share our thoughts
        about the movies that we've watched -- it's really that simple! You can
        browse our reviews, or even submit a request to write your own!
      </Body>
    </Container>
  )
}

export default AboutBox
