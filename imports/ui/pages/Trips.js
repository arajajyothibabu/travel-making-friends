import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import TripsList from "../reusable/TripsList";

const styles = theme => ({

});

class Trips extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {  } = this.props;
        return(
            <Fragment>
                <Grid container justify="center">
                    <Grid item xs={12} sm={7} md={8} lg={7}>
                        <TripsList />
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

export default withStyles(styles, { withTheme: true })(Trips);