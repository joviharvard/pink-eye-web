import React from 'react'
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../utils/globalContext'

const PublicRoute = ({ children, error, ...rest }) => {
  const { isSignedIn } = useGlobalContext()
  return (
    <Route
      {...rest}
      render={() =>
        !isSignedIn ? (
          <>{children}</>
        ) : (
          <>
            {/* Add any authenticated-specific components, such as an logged-in navbar, here */}
            {children}
          </>
        )
      }
    />
  )
}

export default PublicRoute
