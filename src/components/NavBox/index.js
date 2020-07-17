import React from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../theme'
import SingleNavButton from '../SingleNavButton'
import HomeNav from '../HomeNav'
import { ROUTE_PATHS } from '../../utils/constants'

const NavBox = ({ location }) => {
  const history = useHistory()
  const isReviews = window.location.href.includes(ROUTE_PATHS.REVIEWS)
  const isSubmit = window.location.href.includes(ROUTE_PATHS.SUBMIT)
  const isMerch = window.location.href.includes(ROUTE_PATHS.MERCH)
  const { pathname } = location
  const prev = location.state ? location.state.prev : ROUTE_PATHS.HOME
  return (
    <div
      style={{
        width: '320px',
        height: '320px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <HomeNav
          isSelected={!(isReviews || isSubmit)}
          onClick={() => {
            if (pathname !== ROUTE_PATHS.HOME) {
              history.push({
                pathname: ROUTE_PATHS.HOME,
                state: { prev: pathname },
              })
            }
          }}
          wasPrev={prev === ROUTE_PATHS.HOME}
        />
        <SingleNavButton
          outlineColor="pink"
          hoverColor={theme.colors.darkBlue}
          backgroundColor={theme.colors.darkBlue}
          text="REVIEWS"
          isSelected={isReviews}
          onClick={() => {
            if (pathname !== ROUTE_PATHS.REVIEWS) {
              history.push({
                pathname: ROUTE_PATHS.REVIEWS,
                state: { prev: pathname },
              })
            }
          }}
          wasPrev={prev === ROUTE_PATHS.REVIEWS}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SingleNavButton
          outlineColor="pink"
          hoverColor={theme.colors.darkBlue}
          backgroundColor={theme.colors.darkBlue}
          text="MERCH"
          isSelected={isMerch}
          onClick={() => {
            if (pathname !== ROUTE_PATHS.MERCH) {
              history.push({
                pathname: ROUTE_PATHS.MERCH,
                state: { prev: pathname },
              })
            }
          }}
          wasPrev={prev === ROUTE_PATHS.MERCH}
        />
        <SingleNavButton
          outlineColor="pink"
          hoverColor={theme.colors.darkBlue}
          backgroundColor={theme.colors.darkBlue}
          text="SUBMIT"
          isSelected={isSubmit}
          onClick={() => {
            if (pathname !== ROUTE_PATHS.SUBMIT) {
              history.push({
                pathname: ROUTE_PATHS.SUBMIT,
                state: { prev: pathname },
              })
            }
          }}
          wasPrev={prev === ROUTE_PATHS.SUBMIT}
        />
      </div>
    </div>
  )
}

export default NavBox
