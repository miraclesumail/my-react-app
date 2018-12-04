import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './tab.scss';

class Tab extends Component {
  render() {
    return (
     <nav>
        <ul>
            <li><NavLink to='/' exact activeClassName="active">首页</NavLink></li>
            <li><NavLink to='/about'  activeClassName="active">大厅</NavLink></li>
            <li><NavLink to='/what'  activeClassName="active">存取款</NavLink></li>
        </ul>
    </nav>
    );
  }
}

export default Tab;

//  <nav>
//  <ul>
//    <li><NavLink to='/'>Home</NavLink></li>
//    <li><NavLink to='/roster'>Roster</NavLink></li>
//    <li><NavLink to='/schedule'>Schedule</NavLink></li>
//  </ul>
// </nav>