import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component {
    render () {
        const { user } = this.props;
        return (<h1>Welcome home {user.username}</h1>);
    }
}

function mapStateToProps(state) {
    const { user } = state.authReducer
    return { user }
}

const connectedHome = connect(mapStateToProps)(Home)
export default connectedHome