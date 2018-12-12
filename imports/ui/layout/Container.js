import React, { Component, Fragment } from 'react';
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import Switch from "../../startup/client/routes";
import globalStyles from './styles';
import { withRouter } from 'react-router-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6a1b9a',
        },
        secondary: red,
    },
});

class Container extends Component {

    render(){
        const {  } = this.props;
        return(
            <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Header {...this.props}/>
                    <Switch {...this.props}/>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }

}

const ContainerWithRouter = withRouter(withStyles(globalStyles)(Container));

export default class extends Component {
    render(){
        return(
            <Router history={browserHistory}>
                <ContainerWithRouter />
            </Router>
        )
    }
}