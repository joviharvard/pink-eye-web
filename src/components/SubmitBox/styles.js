import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  color: white;
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  &:hover {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
  overflow-y: scroll;
  scrollbar-color: red yellow;
`

export const HeaderBox = styled.div`
  width: 75%;
  height: 20%;
  margin-top: 20px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 4px 4px;
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  ${Container}:hover & {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
  text-align: center;
`

export const Header = styled.p`
  padding: 10px;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
`

export const Body = styled.p`
  width: 85%
  text-align: center;
  font-size: 0.95em;
  padding-bottom: 30px;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
`
