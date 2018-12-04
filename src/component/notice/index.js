import React, { Component } from 'react';
import BScroll from 'better-scroll';
import { connect } from "react-redux";
import './notice.scss'

class Notice extends Component {
  constructor() {
      super();
      this.timer = null;
      this.noticeList = React.createRef();
      this.notice = React.createRef();

      this.state = {
          list:[
              {title:'wwww', content:'qqqq'},
              {title:'qqqq', content:'qqqq'},
              {title:'eeee', content:'qqqq'},
              {title:'ffff', content:'qqqq'},
          ],
          autoPlay: true,
          interval: 2000,
          slider:null
      }
  }

//   componentDidMount() {
//     console.log(this.noticeList.current)
//     console.log(this.props) 
//   }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(this.props)
    this.noticeList.current.style.width = this.state.list.length + '00%';
    let slider = new BScroll(this.notice.current, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
            loop: true,
            // threshold: 0.1, 
            speed: 500
        },
        bounce: false,
        stopPropagation: false,
        tap: true,
        click: true
    });
    console.log(slider);
    this.setState((prevState, props) => {
         return {
             slider
         }
    }, () => {
        //  Array.prototype.slice.call(document.querySelectorAll('li')).forEach(element => {
        //       element.style.width = document.body.clientWidth + 'px'
        //  });     
         this.play();   
         this.handerSliderListener();
    })
  }

  play = () => {
        if (this.state.autoPlay) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.state.slider.next();
            }, this.state.interval);
        }
  }

  handerSliderListener = () => {
        this.state.slider.on('scrollEnd', () => {
             console.log('end');
             this.play();
        });
        this.state.slider.on('touchEnd', () => {
             this.play();
        });
  }

  render() {
    return (
        <div className="notice">
        <div className="list">
            <div className="sliderlistss" ref={this.notice}>
                <ul className="itemss" ref={this.noticeList}>
                    {
                       this.state.list.map((item,index) => 
                        ( 
                          <li key={index} >  
                            <div className="title">
                                【{item.title}】
                            </div>
                            <div className="text">
                                {item.content}
                            </div>
                          </li>  
                          )
                       )    
                    }  
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default Notice;
 