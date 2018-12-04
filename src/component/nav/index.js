import React, { Component } from 'react';
import BScroll from 'better-scroll';
import { connect } from "react-redux";
import {nav} from '../../common/file_config';
import './nav.scss'

class Nav extends Component {
  constructor() {
      super();
      this.state = {
       
      }
  }

  render() {
    return (
        <div className="nav-tab">
            <ul className="list">
               {
                   nav.map((item, index) => (
                        <li key={index} onClick={this.props.change(index)}>
                            <div className="icon">
                                <img src={item.imgUrl} alt=""/>         
                            </div>
                            <div className="text">
                                 {item.title}
                            </div>
                        </li>
                      )
                   )            
               }
            </ul>
        </div>
    );
  }
}

export default Nav;
 