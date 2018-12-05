import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

// route components
import Home from '../../ui/pages/Home';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={Home}/>
        </Switch>
    </Router>
);