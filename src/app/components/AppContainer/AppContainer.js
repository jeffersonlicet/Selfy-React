import React from 'react';
import './AppContainer.css';

class AppContainer extends React.Component {
    render() { 
        return (<div className="container-fluid">{ this.props.children }</div>);
    }
}

export default AppContainer;
