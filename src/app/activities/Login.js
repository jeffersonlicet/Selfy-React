import React from 'react';
import cookie from 'react-cookies';
import Redirect from 'react-router-dom/Redirect';

import { isAuthenticated as _isAuthenticated } from '../middlewares/Authenticated';

import LoginBox from '../components/LoginBox/LoginBox';
import LoadingModal from '../components/LoadingModal/LoadingModal';

export default class Login extends React.Component
{
    state = { isLoadingModalOpened: false, isAuthenticated: _isAuthenticated};

	constructor(props) {
		super(props);

		this.onSignin = this.onSignin.bind(this);
		this.openLoadingModal  = this.openLoadingModal.bind(this);
		this.closeLoadingModal = this.closeLoadingModal.bind(this);
	}

	openLoadingModal() {
		this.setState({isLoadingModalOpened: true});
	}

	closeLoadingModal() {
		this.setState({isLoadingModalOpened: false});
	}
	
	onSignin(user) {
		cookie.save('user', user);
		cookie.save('isAuthenticated', true);
		this.setState({isAuthenticated : true});
    }
    
    render() {
        if(this.state.isAuthenticated)
            return <Redirect to="/" />;
        
        else {
            return (
                <div>
                    <LoadingModal isVisible={this.state.isLoadingModalOpened} /> 
                    <LoginBox 
                        onSignin={this.onSignin} 
                        openLoadingModal={this.openLoadingModal}
                        closeLoadingModal={this.closeLoadingModal} />
                </div>
            );
        }
    }
}