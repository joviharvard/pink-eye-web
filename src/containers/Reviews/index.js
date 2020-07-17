import React from 'react'
import SingleMovieCard from '../../components/SingleMovieCard'

// pull all reviews here:
const testData = [
  {
    title: 'CHUNKING EXPRESS',
    director: 'Wong Kar Wai',
    rating: 4.4,
    reviewer: 'Jovi',
  },
  {
    title: 'THE TERRORIZERS',
    director: 'Edward Yang',
    rating: 3.6,
    reviewer: 'Anonymous',
  },
  {
    title: 'YI-YI',
    director: 'Edward Yang',
    rating: 4.2,
    reviewer: 'Big Boys Always',
  },
  {
    title: '3 WOMEN',
    director: 'ROBERT ALTMAN',
    rating: 2.5,
    reviewer: 'GIANT BOIL GUY',
  },
]

const Reviews = () => (
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
    {testData.map(metaData => (
      <SingleMovieCard metaData={metaData} />
    ))}
  </div>
)

export default Reviews
