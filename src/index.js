import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import configureStore from './redux/store';
import './tool/rem'
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import PubSub from 'pubsub-js'
import * as serviceWorker from './serviceWorker';

export const store = configureStore();

store.subscribe(() => {
     console.log('ddd');
})

// 添加全局发布订阅
Component.prototype.$react = PubSub;

// const tool = {
//   $tool = (name, value) => {
//     // this.setState((prevState, props) => {
//     //     return {
//     //        name: value
//     //     }
//     // })
// }

Component.prototype.$set = function(name, value){
    this.setState((prevState, props) => {
        return {
           [name]: value
        }
    })
}



ReactDOM.render((
    <Provider store={store}>
       <BrowserRouter>
            <Switch>
              <App/>  
            </Switch>
       </BrowserRouter>
    </Provider>   
  ),  document.getElementById('root'))

// document.querySelector('.alert').addEventListener('webkitTransitionStart', () => {
//       console.log('cccc')
//       store.dispatch({
//          type: 'CHANGE_ALERT',
//          canChange: 0
//       })
// }, false)

// document.querySelector('.alert').addEventListener('webkitTransitionEnd', () => {
//     console.log('dddd')
//     store.dispatch({
//        type: 'CHANGE_ALERT',
//        canChange: 1
//     })
// }, false)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
