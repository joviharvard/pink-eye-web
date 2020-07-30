import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.p`
  width: 100%;
  text-align: center;
  padding: 30px;
  font-size: 3em;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
  color: ${({ theme }) => theme.colors.pink || 'white'};
`

export const Subheader = styled(Header)`
  padding: 10px;
  font-size: 2em;
`
