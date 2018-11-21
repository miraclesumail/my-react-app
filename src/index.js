import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './view/home'
import About from './view/about'
import What from './view/what'

/* <Route exact path='/' component={Home}/>
<Route path='/about' component={About}/>
<Route path='/what' component={What}/> */

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <BrowserRouter>
        <Switch>
           <App/>
        </Switch>
    </BrowserRouter>
  ),  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
