import React, { Component } from 'react';
import Lazy from '../component/lazy'

class What extends Component {
  componentDidMount() {
    
  }   

  render() {
    return (
      <div className="home">
           {
             Array.prototype.fill.call(new Array(6), null).map((item, index) => 
                 (
                    <Lazy index={index} key={index}>this is lazy {index}</Lazy>
                 ) 
             )
           }
      </div>
    );
  }
}

export default What;