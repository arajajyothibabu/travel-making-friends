import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

import { withTracker } from 'meteor/react-meteor-data';

import { Trips } from '../../api/trips';
import {METEOR_METHODS, VEHICLE_ICON_MAP} from "../../constants";
import RouteMap from "../reusable/maps/RouteMap";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from '@material-ui/core/Chip';
import moment from "moment";
import EventAvailable from '@material-ui/icons/EventAvailable';
import EventBusy from '@material-ui/icons/EventBusy';
import { green } from '@material-ui/core/colors';


const { trips } = METEOR_METHODS;

const styles = theme => ({
    divider: {
        margin: '8px 0'
    },
    icon: {
        fontSize: 96
    },
    alignCenter: {
        textAlign: 'center'
    },
    avatar: {
        margin: '0 auto',
        color: theme.palette.primary.main
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

function Gang({gang, max_pals}) { //TODO: display people images and link to profiles
    return gang.concat([...new Array(max_pals - gang.length)]).map((pal, i) =>
        <span key={"pal" + i}>
            { pal ? <Person color="error" fontSize="large" titleAccess="Occupied"/> : <PersonOutline fontSize="large" titleAccess="Slot Empty"/> }
        </span>
    );
}

class Trip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {
            classes,
            trip: {
                _id,  start = {}, place = {},
                max_pals, gang = [], time,
                createdAt, notes, vehicle
            } = {}
        } = this.props;
        return(
            <Grid container justify="center">
                <Grid item xs={12} sm={7} md={7}>
                    {
                        _id && <Fragment>
                            <RouteMap start={start} end={place}/>
                            <LinearProgress className={classes.divider} variant="determinate" value={Math.round(gang.length * 100 / max_pals)} />
                            <Grid container justify="space-between">
                                <Typography variant="caption">
                                   created {moment(createdAt).fromNow()}
                                </Typography>
                                <Chip
                                    icon={<EventAvailable/>}
                                    label={moment(time).format("Do MMM YYYY")}
                                    className={classes.chip}
                                    color="primary"
                                />
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Avatar className={classes.avatar}>A</Avatar>
                                    <Typography noWrap variant="headline" align="center">
                                        { start.name }
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.alignCenter}>
                                    <div>
                                        {
                                            React.cloneElement(VEHICLE_ICON_MAP[vehicle], {
                                                className: classes.icon,
                                                color: 'primary',
                                                titleAccess: vehicle
                                            })
                                        }
                                    </div>
                                    <Gang gang={gang} max_pals={max_pals}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Avatar className={classes.avatar}>B</Avatar>
                                    <Typography noWrap variant="headline" align="center">
                                        { place.name }
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider} variant="inset"/>
                            <Typography variant="subtitle1">
                                { notes }
                            </Typography>
                            <Divider className={classes.divider} variant="inset"/>
                        </Fragment>
                    }
                </Grid>
                <Hidden smDown>
                    <Grid item sm={5} md={3}>

                    </Grid>
                </Hidden>
            </Grid>
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