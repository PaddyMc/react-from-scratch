import React, { Component } from "react"
import { Route, Link, Switch } from 'react-router-dom'

import Home from '../../containers/Home/Home';
import Delete from '../../containers/HomeIs/Home';
let hope = window.location.href
class Menu extends Component {
    
    render() {    
        return (
            <div>
                <div>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/home`}>Game</Link>
                </div>
                {/* <Switch> */}
                    {/* <Route exact path="/" component={ Home } />
                    <Route exact path="/home" component={ Delete } /> */}
                {/* </Switch> */}
            </div>
        );
        //`${hope}/`
        //`${hope}/home`
        // <a href="/" >Home</a>
        // <a href="home" >NotHome</a>
        // <Link to={`${hope}/`}>Home</Link>
        // <Link to={`${hope}/home`}>Game</Link>
    }
}
export default Menu