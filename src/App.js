// import logic 
import React, { Component } from 'react';
import cookie from 'react-cookies';

//import css
import './app/Normalize.css';
import './app/App.css';

//import components
import LoginBox from './app/components/LoginBox/LoginBox';
import AppContainer from './app/components/AppContainer/AppContainer';
import LoadingModal from './app/components/LoadingModal/LoadingModal';

const SidebarNavigationItems = [
	{'key': 1, 'name': 'Home', 'icon': 'public', 'action': 'goHome', 'active': true},
	{'key': 2, 'name': 'Signup', 'icon': 'add', 'action': 'signup', 'active': false},
	{'key': 3, 'name': 'Signin', 'icon': 'chat_bubble_outline', 'action': 'signin', 'active': false}
];

class App extends Component {
	constructor(props){
		super(props);
		this.openLoadingModal  = this.openLoadingModal.bind(this);
		this.closeLoadingModal = this.closeLoadingModal.bind(this);
		this.onSignin = this.onSignin.bind(this);
	}

	componentWillMount() {
		this.setState({ 
			isUserLogged: cookie.load('isUserLogged'),
			isLoadingModalOpened: false,
			user: cookie.load('user')
		});
	}

	openLoadingModal() {
		this.setState({isLoadingModalOpened: true});
	}

	closeLoadingModal() {
		this.setState({isLoadingModalOpened: false});
	}
	
	onSignin(user) {
		cookie.save('user', user);
		cookie.save('isUserLogged', true);
		this.setState({isUserLogged : true});
	}

	render() {
		if(this.state.isUserLogged) {
			return (
				<AppContainer>
					Bienvenido de vuelta {this.state.user.username}	 
				</AppContainer>
			);
		}
	 
		return (
			<AppContainer>
				<LoadingModal 
					isVisible={this.state.isLoadingModalOpened} /> 
				
				<LoginBox 
					onSignin={this.onSignin} 
					openLoadingModal={this.openLoadingModal}
					closeLoadingModal={this.closeLoadingModal} /> 
			</AppContainer>
		);
	} 
}

export default App;
