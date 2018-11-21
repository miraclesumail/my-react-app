import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './tab.css';

class Tab extends Component {
  render() {
    return (
     <nav>
        <ul class="tab">
            <li><NavLink to='/' exact activeClassName="active">home</NavLink></li>
            <li><NavLink to='/about'  activeClassName="active">about</NavLink></li>
            <li><NavLink to='/what'  activeClassName="active">what</NavLink></li>
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