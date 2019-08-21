import React, {Component, Fragment} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Location from "./maps/Location";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import DateTimePicker from "./DateTimePicker";
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import GroupIcon from '@material-ui/icons/Group';
import classnames from 'classnames';
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import LocationCity from '@material-ui/icons/LocationCity';
import DateRangeTwoTone from '@material-ui/icons/DateRangeTwoTone';
import { METEOR_METHODS, VEHICLES} from "../../constants";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Motorcycle from '@material-ui/icons/Motorcycle';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import Commute from '@material-ui/icons/Commute';

const { trips } = METEOR_METHODS;

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    },
    text: {

    },
    slider: {
        margin: `${theme.spacing.unit * 2}px 0`,
        paddingRight: theme.spacing.unit * 4
    },
    track: {
        height: theme.spacing.unit / 2,
    },
    thumb: {
        width: theme.spacing.unit * 9 / 4,
        height: theme.spacing.unit * 9 / 4
    },
    showIcon: {
        fontSize: theme.spacing.unit * 12,
        display: 'block',
        margin: '0 auto'
    },
    toggleContainer: {
        //height: 56,
        //padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        //margin: `${theme.spacing.unit}px 0`,
        //background: theme.palette.background.default,
    },
    formField: {
        //padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        margin: `${theme.spacing.unit}px 0`
    }
});

const VEHICLES_SRC = [
    { vehicle: VEHICLES.TBD, icon: <Commute/> },
    { vehicle: VEHICLES.Bike, icon: <Motorcycle/> },
    { vehicle: VEHICLES.Car, icon: <DirectionsCar/> },
    { vehicle: VEHICLES.Bus, icon: <DirectionsBus/> }
];

class NewTripForm extends Component {

    constructor(props) {
        super(props);
        const defaultStartTime = moment().add(1, 'days').startOf('day').add(9, 'hours');
        const {
            start = {}, place = {}, gang = [],
            notes = '', time = defaultStartTime, max_pals = 1,
            vehicle = VEHICLES.TBD
        } = props;
        this.state = {
            start, place, gang, notes,
            time, max_pals, vehicle
        };
    }

    handleStart = start => {
        this.setState({start});
    };

    handlePlace = place => {
        this.setState({place});
    };

    handleTime = time => {
        this.setState({time});
    };

    handleNotes = e => {
        this.setState({notes: e.target.value});
    };

    handleSize = (event, max_pals) => {
        this.setState({max_pals: max_pals > 0 ? max_pals : 1});
    };

    handleFormat = (event, vehicle) => {
        this.setState({ vehicle });
    };
    
    isValid = () => {
        const { start, place, gang, notes, time, max_pals, vehicle  } = this.state;
        const hasStart = start.name && start.name.length > 0;
        const hasPlace = place.name && place.name.length > 0;
        return hasStart && hasPlace; //TODO: add more validation
    };

    handleSave = (e) => {
        e.preventDefault();
        const trip = this.state;
        trip.time = trip.time.toJSON();
        console.info(trip);
        Meteor.call(trips.insert, trip);
    };


    render(){
        const { classes } = this.props;
        const { time, max_pals, notes, vehicle } = this.state;
        return(
            <Paper className={classes.paper}>
                <form onSubmit={this.handleSave}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Location label="Where to" handleChange={this.handlePlace} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Location label="Starting from" handleChange={this.handleStart}/>
                        </Grid>
                        <Hidden smDown>
                            <Grid md={6} item>
                                <LocationCity className={classes.showIcon} color="primary"/>
                            </Grid>
                            <Grid md={6} item>
                                <DateRangeTwoTone className={classes.showIcon} color="error"/>
                            </Grid>
                        </Hidden>
                        <Grid xs={12} md={6} item>
                            <DateTimePicker label="Tentative Date & Time" dateTime={time} handleChange={this.handleTime}/>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.formField}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1" className={classes.text}>How many can join you ? </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm>
                                        <Slider
                                            classes={{
                                                root: classes.slider,
                                                track: classes.track,
                                                thumb: classes.thumb
                                            }}
                                            min={0}
                                            max={15}
                                            step={1}
                                            value={max_pals}
                                            aria-labelledby="Max People"
                                            onChange={this.handleSize}
                                            thumb={
                                                <Badge color="secondary" badgeContent={max_pals} invisible={max_pals === 0}>
                                                    <GroupIcon color="primary" />
                                                </Badge>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <div className={classes.formField}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1" className={classes.text}>Means of transport ?</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm>
                                        <div className={classes.toggleContainer}>
                                            <ToggleButtonGroup value={vehicle} exclusive onChange={this.handleFormat}>
                                                { VEHICLES_SRC.map(({vehicle, icon}) =>
                                                    <ToggleButton key={vehicle} value={vehicle} title={vehicle}>
                                                        {icon}
                                                    </ToggleButton>
                                                )
                                                }
                                            </ToggleButtonGroup>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                label="Notes"
                                multiline
                                rowsMax="20"
                                value={notes}
                                onChange={this.handleNotes}
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type="submit" disabled={!this.isValid()} style={{float: 'right'}} variant="contained" color="primary">Create Trip</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        )
    }

}

export default withTracker(() => {
    return {
        user: Meteor.user(),
    };
})(
    withStyles(styles, { withTheme: true })(NewTripForm)
);