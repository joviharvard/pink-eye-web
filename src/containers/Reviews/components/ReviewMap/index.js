import React from 'react'
import { useHistory } from 'react-router-dom'
import SingleMovieCard from '../../../../components/SingleMovieCard'
import theme from '../../../../theme'
import { ROUTE_PATHS } from '../../../../utils/constants'

const ReviewMap = ({ data }) => {
  const history = useHistory()
  return data.allReviews.length < 1 ? (
    <div
      style={{
        fontFamily: theme.fonts.terminal,
        color: theme.colors.lightGreen,
        alignSelf: 'center',
      }}
    >
      NO SEARCH RESULTS
    </div>
  ) : (
    data.allReviews.map(metaData => (
      <SingleMovieCard
        metaData={metaData}
        onClick={() => history.push({
          pathname: ROUTE_PATHS.SINGLE_REVIEW,
          state: {
            review: metaData,
          },
        })}
      />
    ))
  )
}

export default ReviewMap
