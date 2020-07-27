import styled from 'styled-components'
import blackEye from '../../assets/images/emptyEye.png'
import redEye from '../../assets/images/hoverEyeRating.png'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue} 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 100%;
`

export const InnerContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    box-shadow: inset -6px -6px 0px 0px
      ${({ theme }) => theme.colors.lightGreen};
    transition: background-color 0.6s ease;
    transition: box-shadow 0.6s ease;
  }
`

export const RangeContainer = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.terminal};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px;
  text-align: center;

  .value {
    flex: 0.9;
    font-size: 1.5rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    background: ${({ theme, good }) =>
      good ? theme.colors.orange : theme.colors.red};
    transition: background 0.4s;
    outline: none;
    -webkit-transition: 0.2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 45px;
    height: 45px;
    background: url(${({ good }) => (good ? redEye : blackEye)});
    background-size: 45px 45px;
  }
`
export const Range = styled.input`
  width: 100px;
  height: 30px;
`

export const Text = styled.p`
  user-select: none;
  font-size: 0.9rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.terminal};
  color: white;
  padding: 6px;
`
