import React from 'react';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router-dom';
import APP from '../constants/app.constants';

export const loggedIn = () => {
    return cookie.load('loggedIn');
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        loggedIn()
            ? <Component {...props} />
            : <Redirect to={{ pathname: APP.SIGNIN_ROUTE, state: { from: props.location } }} />
    )} />
)

export default AuthenticatedRoute