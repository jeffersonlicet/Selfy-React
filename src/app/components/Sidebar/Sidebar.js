import React, { Component } from 'react';
import './Sidebar.css';

class SidebarItem extends React.Component {
    handleClick(action) {
        alert("Hola");
    }

    render() {
        return (<li key={this.props.data.key} className={this.props.data.active ? 'active' : ''} onClick={() => this.handleClick(this.props.data.action) }><i className="material-icons">{this.props.data.icon}</i><span>{this.props.data.name}</span></li>);
    }
}

class Sidebar extends React.Component {
    render() {
        return (
        <div className="sidebar">
            <ul>{this.props.items.map((item) => <SidebarItem data={item} />)}</ul>
        </div>);
    }
}

export default Sidebar;