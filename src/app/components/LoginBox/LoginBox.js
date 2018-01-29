import React from 'react';
import { API } from '../../Constants';

import './LoginBox.css';
import '../Shadow/Shadow.css';

export default class LoginBox extends React.Component {
    state = { username: '', password: '', busy: false }
    
    constructor(props) {
        super(props);
        
        this.callSignin     = this.callSignin.bind(this);
        this.handleKeyUp    = this.handleKeyUp.bind(this);
        this.handleChange   = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.usernameInput.focus();
    }

    handleKeyUp(event) {   
        if(event.key === 'Enter') {
            if(event.target.id === "username") {
                this.passwordInput.focus();
            } else { this.callSignin(); }
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    callSignin() {  
        if(this.state.busy) return;

        let usernameVal = this.state.username;
        let passwordVal = this.state.password;

        if(!usernameVal) {
            this.usernameInput.focus();
            return;
        }

        if(!passwordVal) {
            this.passwordInput.focus();
            return;
        }

        this.setState({busy: true});
        this.props.openLoadingModal();
        
        let context = this;
        let formData = new FormData();
        
        formData.append('username', usernameVal);
        formData.append('password', passwordVal);

        fetch(API + '/user/login', 
            {
                method: 'POST',
                body: formData
            }
        )
        .then(response => { return response.json(); })
        .then(response => {
                if(response.status) {                    
                    context.setState({busy: false});
                    context.props.onSignin(response.user);
                }

                else {
                    context.props.closeLoadingModal();
                    context.setState({busy: false});
                    this.usernameInput.focus();

                    alert(response.report);
                }
            }
        );
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
                    <button className="btn btn-primary shadow-1" onClick={this.callSignin}>Signin</button>
                </div> 
            </div>);
    }
}