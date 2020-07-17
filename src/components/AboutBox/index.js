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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Body>
    </Container>
  )
}

export default AboutBox
