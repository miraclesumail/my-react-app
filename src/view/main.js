import Home from './home'
import About from './about'
import What from './what'
import Login from './login'
import Deposit from './deposit'
import './main.css'
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import React, { Component } from 'react';

const routes = [
    {name:'home', component:Home, path:'/'},
    {name:'about', component:About, path:'/about'},
    {name:'login', component:Login, path:'/login'},
    {name:'deposit', component:Deposit, path:'/deposit'}
]

class Main extends Component { 
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        const routers = routes.map((item, index) => {
            const {path, component, name} = item;
            return (
                <Route exact path={path} component={component} name={name} key={index}/>
            )
        })

        return (
            <main className={this.props.class === 'show' ? 'showHeader' : 'noShow'}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/what' component={What}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/deposit' component={Deposit}/>
                </Switch>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    scrollProps: state.scrollTop
});
//export default connect(mapStateToProps)(Main);
export default Main;

