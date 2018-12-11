import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

// route components
import Home from '../../ui/pages/Home';
import Trips from "../../ui/pages/Trips";
import NewTrip from "../../ui/pages/NewTrip";

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/trips" component={Trips}/>
            <Route exact path="/trips/new" component={NewTrip}/>
            <Route component={Home}/>
        </Switch>
    </Router>
);