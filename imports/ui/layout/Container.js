import React, { Component, Fragment } from 'react';
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import {renderRoutes} from "../../startup/client/routes";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6a1b9a',
        },
        secondary: red,
    },
});

export default class Container extends Component {

    render(){
        const {  } = this.props;
        return(
            <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Header />
                    {renderRoutes()}
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        )
    }

}
