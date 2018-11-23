import React, { Component, Fragment } from 'react';
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Location from "../reusable/maps/Location";

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
                    <Header />
                    <Location />
                </MuiThemeProvider>
            </Fragment>
        )
    }

}
