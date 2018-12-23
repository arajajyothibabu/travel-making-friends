import React from 'react';
import { Route, Switch } from 'react-router';

// route components
import Home from '../../ui/pages/Home';
import Trips from "../../ui/pages/Trips";
import NewTrip from "../../ui/pages/NewTrip";
import Search from "../../ui/pages/Search";

const withProps = (Component, routeProps = {}) => (props) => (
    <Component {...routeProps} {...props}/>
);

export default () => (
    <Switch>
        <Route exact path="/" component={withProps(Home)}/>
        <Route exact path="/trips" component={withProps(Trips)}/>
        <Route exact path="/trips/new" component={withProps(NewTrip)}/>
        <Route exact path="/search" component={withProps(Search)}/>
        <Route component={withProps(Home)}/>
    </Switch>
);