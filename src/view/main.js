import Home from './home'
import About from './about'
import What from './what'
import React from 'react'

import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/what' component={What}/>
      </Switch>
    </main>
)
  
export default Main