import React, { Component } from 'react';
import Scroll from '../../component/scroll'
import { connect } from "react-redux";
import * as $ from 'jquery'
import './about.scss'
class About extends Component {
  constructor() {
      super();
      this.state= {
           list:[
             '12345',
             '啊啊啊',
             '啊啊啊',
             '啊啊啊',
             '啊啊啊',
             '啊啊啊',
             '啊啊啊',
             '啊啊啊'
           ]
      }
  }

  randomFirst = () => {
      const number = Array.prototype.fill.call(new Array(5), null).map(() => {return parseInt(Math.random()*10)}).join('');
      const newList = [number, ...this.state.list.slice(1, this.state.list.length)];
      this.setState((prevState, props) => {
           return {
               list: newList
           }
      })
  }

  componentWillUnmount(){
    console.log($('.scroll-content').css('transform').replace(/[^0-9\-,]/g,'').split(','))
    const matrixArr = $('.scroll-content').css('transform').replace(/[^0-9\-,]/g,'').split(',')
    console.log(matrixArr[matrixArr.length - 1])

    //this.props.changeTop();
  }

  render() {
    const number = -200
    return (
      <div className="about">
         <Scroll changeFirst={this.randomFirst} scrollTop={number}>
             {
               this.state.list.map((item, index) => 
                  (<div className="list" key={index}>{item}</div>)
               )
             }
         </Scroll>  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeTop: (data) => {
      dispatch({
        type: 'CHANGE_TOP',
        data
      })
  }
}); 
//export default connect(mapDispatchToProps)(About);
export default About;