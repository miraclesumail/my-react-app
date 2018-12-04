import React, { Component } from 'react'
import * as $ from 'jquery'
import './lazy.scss'

export default class Lazy extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tag: 'lazyContainer' + this.props.index,
          show: true
      }
  }

  componentDidMount(){
      console.log($('.' + this.state.tag).get(0));
      console.log(document.body.clientHeight);
      const offsetTop = $('.' + this.state.tag).get(0).getBoundingClientRect().top;
    //   $('.' + this.state.tag).get(0).addEventListener('scroll', () => {
    //     console.log(this.state.tag);
    //   }, false)
      if (offsetTop > document.body.clientHeight) {
        this.$set('show', false); 
        let scrollHandler = this.$react.subscribe('scrollUpdate', () => {
            // console.log($('.' + this.state.tag).offset().top + '-' + this.props.index);
            const _offsetTop = $('.' + this.state.tag).get(0).getBoundingClientRect().top;
            console.log($('.' + this.state.tag).get(0).getBoundingClientRect().top + '-' + this.props.index);
            if(_offsetTop < document.body.clientHeight){
                this.$react.unsubscribe(scrollHandler);
                this.setState((prevState, props) => {
                    return {
                        show: true
                    }
                })
            } 
        })    
      } else {
         this.$set('show', true); 
      }   
  }

  render() {
    console.log(this.state.show);
    const child = !this.state.show ? (<div>this is default</div>) : this.props.children
    return (
      <div className={this.state.tag + ' lazyContainer'}>
           {child}
      </div>
    )
  }
}
