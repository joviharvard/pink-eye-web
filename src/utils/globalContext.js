import React, {
  useReducer, createContext, useContext, useMemo,
} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { VIEWER } from './graphql'
import client from '../client'

const Context = createContext()
export const useGlobalContext = () => useContext(Context)

const viewerReducer = (prev, payload) => ({ ...prev, ...payload })

// Propagates a global state across all children components
const GlobalContext = ({ children }) => {
  // Add other global state variables to this useReducer() call
  const [state, dispatch] = useReducer(viewerReducer, {
    isSignedIn: !!localStorage.getItem('token') || false,
  })

  // Query user data on first render, make sure to edit the VIEWER query in graphql.js
  const { data, ...viewerRest } = useQuery(VIEWER, {
    client,
    onCompleted: () => {
      dispatch({ isSignedIn: true })
    },
    onError: () => {
      dispatch({ isSignedIn: false })
      localStorage.removeItem('token')
    },
    skip: !state.isSignedIn,
  })

  // Creates a memoized version of the global state
  // Add any other state variables as properties of `obj`
  const globalState = useMemo(() => {
    const obj = { ...viewerRest, ...state }
    obj.viewer = (data && data.viewer) ? data.viewer : null

    obj.setIsSignedIn = input => {
      dispatch({ isSignedIn: input })
    }

    return obj
  }, [state, data])

  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext
