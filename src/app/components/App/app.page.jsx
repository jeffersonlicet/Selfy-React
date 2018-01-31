import React from 'react'
import { Router } from 'react-router-dom';
import { connect } from 'react-redux'
import { history } from '../../helpers/history';
// Pages
import Home from '../Home/home.page'
import Login from '../Login/login.page'

// Components
import AppContainer from '../_AppContainer/AppContainer'
import LoadingModal from '../_LoadingModal/LoadingModal'
import ErrorModal from '../_ErrorModal/ErrorModal'

//Middlewares
import GuestRoute from '../../middlewares/GuestRoute'
import AuthenticatedRoute from '../../middlewares/AuthenticatedRoute'

// Actions
import { hideLoading } from '../../actions/app.actions'

// CSS
import '../../vendor/Normalize.css'
import './app.page.css'

class App extends React.Component{
	
	componentDidMount() {
		this.props.dispatch(hideLoading())
	}
	
	render() {
		return ( 
			<Router history={history}>
				<AppContainer>
					<AuthenticatedRoute exact path="/" component={Home}  />
					<GuestRoute path="/login"  component={Login} />
					<LoadingModal />
					<ErrorModal />
				</AppContainer>
			</Router>
		);
	}
}

const ConnectedApp = connect()(App)
export default ConnectedApp