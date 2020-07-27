import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px;
  width: ${({ width }) => width || '100%'};
`

export const Bar = styled.input`
  width: 100%;
  font-size: 1.1em;
  padding: 8px;
  border: 0px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  outline: none;
  &:focus {
    box-shadow: inset -3px -3px 0px 0px ${({ theme }) => theme.colors.red};
  }
`

export const MultiBar = styled.textarea`
  width: ${({ width }) => width || '100%'};
  font-size: 1.1em;
  padding: 8px;
  border: 0px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  outline: none;
  resize: none;
  &:focus {
    box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.red};
  }
`

export const ErrorMessage = styled.p`
    font-size: 0.8em;
    padding: 8px;
    margin: 5px;
    font-family: ${({ theme }) => theme.fonts.body}
    color: ${({ theme }) => theme.colors.red}
`
