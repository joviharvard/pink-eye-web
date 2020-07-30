import React from 'react'
import SingleMovieCard from '../../components/SingleMovieCard'
import theme from '../../theme'

const ReviewMap = ({ data }) => {
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
    data.allReviews.map(metaData => <SingleMovieCard metaData={metaData} />)
  )
}

export default ReviewMap
