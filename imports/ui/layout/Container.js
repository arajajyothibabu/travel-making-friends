import React, { Component, Fragment } from 'react';
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import NewTrip from "../NewTrip";
import Hero from "./Hero";

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
        return(
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Header />
                        <Hero/>
                        <NewTrip />
                    </MuiPickersUtilsProvider>
                </MuiThemeProvider>
            </Fragment>
        )
    }

}
