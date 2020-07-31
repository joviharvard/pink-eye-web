import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  color: ${({ theme }) => theme.colors.whitish};
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  justify-content: space-between;
  overflow-y: scroll;
`

export const HeaderBox = styled.div`
  width: 75%;
  height: 20%;
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 0px 4px 4px;
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  ${Container}:hover & {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
`

export const Header = styled.p`
  padding: 10px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
  line-height: 1.5;
`

export const FilterContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: box-shadow 0.2s ease-out;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
`

export const Search = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
`

export const Bar = styled.input`
  width: 80%;
  font-size: 1.2em;
  flex: 4;
  padding: 8px;
  border: 0px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  outline: none;
  &:focus {
    box-shadow: inset 0px -3px 0px 0px ${({ theme }) => theme.colors.red};
  }
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.green}
  flex: 1;
  font-size: 1em;
  padding: 8px;
  transition: box-shadow 0.2s ease-out;
  transition: flex 0.4s ease;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  border: 0px;
  outline: none;
  ${Search}: hover & {
    flex: 0.8;
    transition: flex 0.4s ease;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.red}
  }
`

export const Go = styled.div`
  font-family: ${({ theme }) => theme.fonts.terminal};
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.whitish};
  display: none;
  ${Button}: hover & {
    display: inline;
  }
`
