import React, { Component } from 'react';
import { connect } from "react-redux";
import BScroll from 'better-scroll';
import './scroll.scss'

class Scroll extends Component {
  constructor(props){
      super(props);
      this.ScrollWrapper = React.createRef();
      this.state = {
          scroll: null,
          beforePullDown: true,
          isPullingDown: false,
          refreshDelay: 2000,
          pullWrapperTop: -30
      }
  }   
  
  componentDidMount(){
    //scrollTo(x, y, time, easing)
        const scrollTop = this.props.scrollTop ? this.props.scrollTop : 0
        console.log(scrollTop)
        const scroll = new BScroll(this.ScrollWrapper.current, {
            probeType: 1,
            scrollY: true,
            click: true,
            tap: true,
            pulldown: true,
            momentum: true,
            bounce: true,
            // freeScroll: false,
            pullDownRefresh: {
                threshold: 50,
                stop: 30
            },
            bounceTime: 500  // pulldown 回弹时间
        });
        console.log(scroll);
        this.setState((prevState, props) => {
            return {
                scroll
            }
        }, () => {
            this.state.scroll.on('scroll', (pos) => {
                 this.setState((prevState, props) => {
                     return {
                        pullWrapperTop: -30 + pos.y
                     }
                 })
            })
            this.state.scroll.scrollTo(0, scrollTop)
            this.state.scroll.on('pullingDown', this.pulldownFunc)
        })     
  }

  pulldownFunc = () => {
      console.log('axiba');
      this.props.changeFirst();
      this.setState((prevState, props) => {
           return {
               isPullingDown: true,
               beforePullDown: false
           }
      })

      setTimeout(() => {
        this.forceUpdate()
      }, this.state.refreshDelay)
  }

  forceUpdate = () => {
      if (this.state.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
          console.log('all finish')
        })
      }
  }

  refresh = () => {
    this.state.scroll && this.state.scroll.refresh()
  }

  _reboundPullDown = () => {
    // const {stopTime = 600} = this.pullDownRefresh
    return new Promise((resolve) => {
      setTimeout(() => {
        this.state.scroll.finishPullDown()
        resolve()
      }, 600)
    })
  }

  _afterPullDown = () => {
    setTimeout(() => {
      // this.pullDownStyle = `top:${this.pullDownInitTop}px`
      this.setState((prevState, props) => {
          return {
              beforePullDown: true
          }
      })
      this.refresh()
    }, this.state.scroll.options.bounceTime)
  }
  
  render() {
    const pullStyle= {
         top: this.state.pullWrapperTop + 'px'
    }  
    const pulldownWrapper = (<div className="pulldownWrapper" style={pullStyle}>
         {this.state.beforePullDown ? '下拉刷新' : '正在刷新'}
    </div>)  
    return (
        <div className="scroll-wrapper" ref={this.ScrollWrapper}>
            <div className="scroll-content">
                {this.props.children}
            </div>
            {pulldownWrapper}
        </div>
    );
  }
}

export default Scroll;