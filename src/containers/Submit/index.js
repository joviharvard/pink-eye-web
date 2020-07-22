import React, { useState } from 'react'
import { Container, RangeContainer, Range, Text } from './styles'
import PrimaryButton from '../../components/PrimaryButton'
import PrimaryInput from '../../components/PrimaryInput'

const Submit = () => {
  const [email, changeEmail] = useState('')
  const [name, changeName] = useState('')
  const [movie, changeMovie] = useState('')
  const [rating, changeRating] = useState(0)
  const [body, changeBody] = useState('')
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '70%',
          justifyContent: 'flex-start',
          margin: '4px',
        }}
      >
        <PrimaryInput placeholder="NAME" value={name} onChange={changeName} />
        <PrimaryInput
          placeholder="EMAIL"
          value={email}
          onChange={changeEmail}
        />
      </div>
      <div style={{ width: '70%', paddingRight: '12px', margin: '4px' }}>
        <PrimaryInput
          placeholder="TITLE"
          value={movie}
          onChange={changeMovie}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          justifyContent: 'flex-start',
          margin: '10px',
        }}
      >
        <RangeContainer good={rating >= 3.5}>
          <Range
            className="slider"
            type="range"
            value={rating}
            min={0}
            max={5}
            step={0.5}
            onChange={(val) => changeRating(val.target.value)}
          />
          <div
            className="value"
            style={{
              border: '2.5px solid white',
              marginLeft: '8px',
              padding: '4px',
            }}
          >
            {rating}
          </div>
        </RangeContainer>
        {rating < 3.5 ? (
          <Text>Oh...</Text>
        ) : (
          <Text>WOW! You must really love this movie!!</Text>
        )}
      </div>

      <div style={{ width: '70%', paddingRight: '12px' }}>
        <PrimaryInput
          multiline
          placeholder="Why do you want to review this movie?"
          value={body}
          onChange={changeBody}
        />
      </div>

      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <PrimaryButton text="SUBMIT" />
      </div>
    </Container>
  )
}

export default Submit
