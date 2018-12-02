import React, { Component, Fragment } from 'react';
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {IMAGES_FOLDER} from "../../../utils";

export default class Hero extends Component {

    render(){
        return(
            <Fragment>
                <Paper style={{width: '100%', minHeight: 320, height: '30%', background: `url(${IMAGES_FOLDER}beachview.jpg) no-repeat 100% 50%`}}>
                    Araja Jyothi Babu
                </Paper>
            </Fragment>
        )
    }

}
