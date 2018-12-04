import React, { Component } from 'react';
import Tab from './component/tab'
import Header from './component/header'
import Main from './view/main'
import Profile from './view/profile'
import Alert from './component/alert'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as _ from 'lodash'
import './App.css';

const noHeader = ['login']

class App extends Component {
    componentDidMount () {
        // 监听路由变化
        this.props.history.listen(route => {
            let routeName = route.pathname.replace(/\//, '');
            if(noHeader.indexOf(routeName) !== -1){
               this.props.dispatch(
                  {
                    type: 'CHANGE_HEADER',
                    show: false
                  }
               )
            } else {
                this.props.dispatch(
                  {
                    type: 'CHANGE_HEADER',
                    show: true
                  }
                )
            }
        })

        window.onscroll = _.throttle(() => {
           this.$react.publish('scrollUpdate');
        }, 300)
    }
   
     render(){
       const className = this.props.showProfile ? 'app show' : 'app'
       return ( 
         <div className="big-container">
              <Profile/>
              <div id="app" className={className}>      
                <Header class={this.props.show ? '' : 'noShow'}/>
                <Main class={this.props.show ? 'show' : ''}/>
                <Alert />
                <Tab />
              </div>
         </div>
         
       )
     }
}

const mapStateToProps = state => ({
  show: state.showHeader,
  showProfile: state.showProfile
}); 
export default connect(mapStateToProps)(withRouter(App));

