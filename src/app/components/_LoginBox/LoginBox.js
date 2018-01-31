import React from 'react';

import './LoginBox.css';
import '../_Shadow/Shadow.css';

import { showLoading, blockApp } from '../../actions/app.actions'
import { login } from '../../actions/user.actions'

import { connect } from 'react-redux'

class LoginBox extends React.Component {    
    state = { username: '', password: '', busy: false }
    
    constructor(props) {
        super(props);
        
        this.handleSubmit     = this.handleSubmit.bind(this)
        this.handleKeyUp    = this.handleKeyUp.bind(this)
        this.handleChange   = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.usernameInput.focus()
    }

    handleKeyUp(event) {   
       if(event.key === 'Enter') {
            if(event.target.id === "username") {
                this.passwordInput.focus()
            } else { this.handleSubmit() }
       }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit() {  
        if(this.props.isAppBlocked) return

        let usernameVal = this.state.username
        let passwordVal = this.state.password

        if(!usernameVal) {
            this.usernameInput.focus()
            return;
        }

        if(!passwordVal) {
            this.passwordInput.focus()
            return;
        }
        
        this.props.dispatch(blockApp())
        this.props.dispatch(showLoading())
        this.props.dispatch(login(usernameVal, passwordVal))
    }

    render() { 
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4 login-form">
                    <h1>Signin to Selfy</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input ref={ input => {this.usernameInput = input;}} type="text" className="form-control" id="username" aria-describedby="username" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input ref={ input => {this.passwordInput = input;}} type="password" className="form-control" id="password" aria-describedby="password" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
                        </div>
                    </form>
                    <button className="btn btn-primary shadow-1" onClick={this.handleSubmit}>Signin</button>
                </div> 
            </div>);
    }
}

function mapStateToProps(state){
    const { isAppBlocked } = state.appReducer
    
    return {
        isAppBlocked
    };
}

const LoginBoxConnected = connect(mapStateToProps)(LoginBox);
export default LoginBoxConnected