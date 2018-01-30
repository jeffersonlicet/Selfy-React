// import logic 
import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
  } from 'react-router-dom';

//import css
import './app/Normalize.css';
import './app/App.css';

//import components
import AppContainer from './app/components/AppContainer/AppContainer';

//import middlewares
import Authenticated from './app/middlewares/Authenticated';

//import activities
import Home from './app/activities/Home';
import Login from './app/activities/Login';

const SidebarNavigationItems = [
	{'key': 1, 'name': 'Home', 'icon': 'public', 'action': 'goHome', 'active': true},
	{'key': 2, 'name': 'Signup', 'icon': 'add', 'action': 'signup', 'active': false},
	{'key': 3, 'name': 'Signin', 'icon': 'chat_bubble_outline', 'action': 'signin', 'active': false}
];

export default class App extends Component {	
	render() {
		return ( 
			<Router>
				<AppContainer>
					
					<Authenticated>
						<Route exact path="/" component={Home}  />
					</Authenticated>

					<Route path="/login"  component={Login} />
				</AppContainer>
			</Router>
		);
	}
}

