import React, { Component } from 'react';
import './Appbar.css';
import '../Shadow/Shadow.css';

class Appbar extends React.Component 
{
    render() {
        return (<div className="appBar niceGradient shadow-1"><a>Selfy</a></div>);
    }
}

export default Appbar;