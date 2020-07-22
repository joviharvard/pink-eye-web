import React from 'react'
import { Bar, Container, ErrorMessage, MultiBar } from './styles'

const PrimaryInput = ({
  multiline,
  placeholder,
  value,
  onChange,
  error,
  ...rest
}) => (
  <Container {...rest}>
    {multiline ? (
      <MultiBar
        rows={12}
        placeholder={placeholder}
        onChange={() => onChange()}
        value={value}
        {...rest}
      />
    ) : (
      <Bar
        placeholder={placeholder}
        onChange={() => onChange()}
        value={value}
        {...rest}
      />
    )}

    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
)

export default PrimaryInput
