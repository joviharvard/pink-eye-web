import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { renderRoutes } from './routes'

// Maps over the routes contained in the routes.js file and
// creates a react-router-dom <Route> component for each
const AppRouter = () => (
  <Switch>
    {renderRoutes.map(([key, value]) => (
      <Route
        key={key}
        path={value.path}
        exact={value.exact}
        render={props => (
          <value.routeComponent>
            <value.component
              {...props}
              rightComponent={value.rightComponent}
              leftComponent={value.leftComponent}
            />
          </value.routeComponent>
        )}
      />
    ))}
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
)

export default AppRouter
