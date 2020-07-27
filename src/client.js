import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
// import { onError } from 'apollo-link-error'
// import { ApolloLink } from 'apollo-link'
import config from './config'

const httpLink = new HttpLink({
  uri: config.graphqlUrl,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${config.datoKey}`,
    }),
  }
})

// const afterwareLink = new ApolloLink((operation, forward) => forward(operation)
//   .map(response => {
//     const { response: { headers } } = operation.getContext()
//     const token = headers.get('x-token')

//     if (token) {
//       localStorage.setItem('token', token)
//     }

//     return response
//   }))

// const middlewareLink = new ApolloLink((operation, forward) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     operation.setContext({
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     })
//   }

//   return forward(operation)
// })

// const errorLink = onError(() => {
//   // Handle specific errors here
//   //   e.g. redirect to login on AuthenticationError
// })

export const cache = new InMemoryCache()

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export default client
