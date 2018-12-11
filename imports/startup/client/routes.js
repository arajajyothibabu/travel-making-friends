import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

// route components
import Home from '../../ui/pages/Home';
import Trips from "../../ui/pages/Trips";
import NewTrip from "../../ui/pages/NewTrip";

const withProps = (Component, routeProps = {}) => (props) => (
    <Component {...routeProps} {...props}/>
);

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={withProps(Home)}/>
            <Route exact path="/trips" component={withProps(Trips)}/>
            <Route exact path="/trips/new" component={withProps(NewTrip)}/>
            <Route component={withProps(Home)}/>
        </Switch>
    </Router>
);