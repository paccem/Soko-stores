import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StoreName from '../StoreName'
import Home from './Home'
import Bag from './Bag'
import Account from './Account'

const Navigation = () => {
    return (
        <Router>
            <StoreName />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Bag" component={Bag} />
                <Route path="/Account" component={Account} />
            </Switch>
        </Router>
    )
}

export default Navigation
