import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'
import Home from '../containers/Home'
import Reviews from '../containers/Reviews'
import MainContainer from '../containers/MainContainer'
import AboutBox from '../components/AboutBox'
import Submit from '../containers/Submit'
import FilterBox from '../components/FilterBox'
import SubmitBox from '../components/SubmitBox'

import { ROUTE_PATHS } from '../utils/constants'
import Merch from '../containers/Merch'
import MerchBox from '../components/MerchBox'

/*
 * This object's entries are a list of all routes in the app
 * For each entry, include:
 *  - the string path, from the constants.js file
 *  - the route-type component (PublicRoute or PrivateRoute)
 *  - the actual container component to render
 *  - whether or not the path must be exact
 */

export const routes = {
  home: {
    path: ROUTE_PATHS.HOME,
    routeComponent: PublicRoute,
    component: MainContainer,
    leftComponent: AboutBox,
    rightComponent: Home,
    exact: true,
  },
  reviews: {
    path: ROUTE_PATHS.REVIEWS,
    routeComponent: PublicRoute,
    component: MainContainer,
    leftComponent: FilterBox,
    rightComponent: Reviews,
    exact: true,
  },
  submit: {
    path: ROUTE_PATHS.SUBMIT,
    routeComponent: PublicRoute,
    component: MainContainer,
    leftComponent: SubmitBox,
    rightComponent: Submit,
    exact: true,
  },
  merch: {
    path: ROUTE_PATHS.MERCH,
    routeComponent: PublicRoute,
    component: MainContainer,
    leftComponent: MerchBox,
    rightComponent: Merch,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
