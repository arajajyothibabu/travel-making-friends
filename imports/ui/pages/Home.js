import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import Hidden from '@material-ui/core/Hidden';
import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Trips from "./Trips";

const styles = theme => ({

});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const { trips } = this.props;
        return(
            <Fragment>
                <Header />
                <Hero/>
                <Grid container justify="center">
                    <Grid item xs={12} sm={7} md={8} lg={7}>
                        <Trips/>
                    </Grid>
                    <Hidden smDown>
                        <Grid item sm={5} md={4} lg={3}>

                        </Grid>
                    </Hidden>
                </Grid>
            </Fragment>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Home);