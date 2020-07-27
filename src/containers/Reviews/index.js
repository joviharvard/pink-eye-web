import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import SingleMovieCard from '../../components/SingleMovieCard'
import { GET_REVIEWS } from './graphql'

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
      {
        // Implement loading state with lottie:
        loading ? (
          <div>Loading...</div>
        ) : (
          data.allReviews.map((metaData) => (
            <SingleMovieCard metaData={metaData} />
          ))
        )
      }
    </div>
  )
}
export default Reviews
