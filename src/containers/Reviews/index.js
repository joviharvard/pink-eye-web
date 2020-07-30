import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ReviewMap from './reviewMap'
import { GET_REVIEWS } from './graphql'
import theme from '../../theme'

const Reviews = ({ location }) => {
  const { filter } = location.state || {}
  const { loading, data } = useQuery(GET_REVIEWS, {
    variables: { filter },
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        padding: '30px',
        flexWrap: 'wrap',
        overflowY: 'scroll',
      }}
    >
      {loading ? (
        <div
          style={{
            fontFamily: theme.fonts.terminal,
            color: theme.colors.lightGreen,
            alignSelf: 'center',
          }}
        >
          LOADING...
        </div>
      ) : (
        <ReviewMap data={data} />
      )}
    </div>
  )
}
export default Reviews
