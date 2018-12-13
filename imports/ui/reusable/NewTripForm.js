import React, {Component, Fragment} from 'react';
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
    }
});

class NewTripForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: {},
            place: {},
            gang: [],
            notes: '',
            time: moment(),
            max_size: 1
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

    handleSize = (event, max_size) => {
        this.setState({max_size: max_size > 1 ? max_size : 2});
    };


    render(){
        const { classes } = this.props;
        const { time, max_size, notes } = this.state;
        return(
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Location label="Where to" handleChange={this.handlePlace}/>
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
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" className={classes.text}>How many can join you ? </Typography>
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
                                    value={max_size}
                                    aria-labelledby="Max People"
                                    onChange={this.handleSize}
                                    thumb={
                                        <Badge color="secondary" badgeContent={max_size} invisible={max_size === 0}>
                                            <GroupIcon color="primary" />
                                        </Badge>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default withStyles(styles, { withTheme: true })(NewTripForm);