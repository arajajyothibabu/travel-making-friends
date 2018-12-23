import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import { withTracker } from 'meteor/react-meteor-data';
import { Trips as TripsCollection } from '../../api/trips';
import TripsList from "../reusable/TripsList";

const styles = theme => ({

});

class Search extends Component {

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

const TripsWithStyles = withStyles(styles, { withTheme: true })(Search);

export default withTracker(() => {
    return {
        trips: TripsCollection.find({}).fetch(),
    };
})(TripsWithStyles);