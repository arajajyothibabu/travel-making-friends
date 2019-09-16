import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

import { withTracker } from 'meteor/react-meteor-data';

import { Trips } from '../../api/trips';
import {METEOR_METHODS} from "../../constants";
import RouteMap from "../reusable/maps/RouteMap";


const { trips } = METEOR_METHODS;

const styles = theme => ({

});

class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const { trip } = this.props;
        return(
            <Fragment>
                <Grid container justify="center">
                    <Grid item xs={12} sm={7} md={8} lg={7}>
                        {
                            trip._id && <RouteMap start={trip.start} end={trip.place}/>
                        }
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

const TripsWithStyles = withStyles(styles, { withTheme: true })(Trip);

export default withTracker(({match: { params: { tripId } }}) => {
    const trips = Trips.find({_id: tripId}).fetch();
    return {
        trip: trips && trips.length === 1 ? trips[0] : {}
    }
})(TripsWithStyles);