import gql from 'graphql-tag'

export const GET_REVIEWS = gql`
  query reviews($filter: ReviewModelFilter) {
    allReviews(filter: $filter) {
      movieTitle
      director
      rating
      reviewer
      region
      body
      screencap {
        id
        url
      }
    }
  }
`
