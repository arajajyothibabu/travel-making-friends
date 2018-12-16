import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

import { withTracker } from 'meteor/react-meteor-data';

import { Trips } from '../../api/trips';
import NewTripForm from "../reusable/NewTripForm";
import {METEOR_METHODS} from "../../constants";


const { trips } = METEOR_METHODS;

const styles = theme => ({

});

class NewTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const { trips } = this.props;
        return(
            <Fragment>
                <Grid container justify="center">
                    <Grid item xs={12} sm={7} md={8} lg={7}>
                        <NewTripForm />
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

const TripsWithStyles = withStyles(styles, { withTheme: true })(NewTrip);

export default withTracker(() => {
    return {
        trips: Trips.find({}).fetch(),
    };
})(TripsWithStyles);