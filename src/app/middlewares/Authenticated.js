import React from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../Constants';

export const isAuthenticated = () => {
    return cookie.load('isAuthenticated');
}

export default class AuthenticatedRoute extends React.Component {

	render() {
        if(isAuthenticated())
            return this.props.children;
        
        else 
            return <Redirect to={ SIGNIN_ROUTE } />;
	}
}