import styled from 'styled-components'

export const Container = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.blue : theme.colors.darkBlue};
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    transition: background 0.3s ease;

  }
  transition: box-shadow 0.3s ease;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.fonts.subheader};
`

export const Text = styled.p`
  width: 80%;
  font-size: 1.3em;
  padding: 12px;
  border: 0px;
`

export const Indicator = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
