import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Location from "./reusable/maps/Location";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import DateTimePicker from "./reusable/DateTimePicker";
import moment from 'moment';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    },
});

class NewTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: {},
            place: {},
            gang: [],
            notes: '',
            time: moment()
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


    render(){
        const { classes } = this.props;
        const { time } = this.state;
        return(
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <Location label="Trip to" handleChange={this.handlePlace}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Location label="Starting from" handleChange={this.handleStart}/>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <DateTimePicker dateTime={time} handleChange={this.handleTime}/>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default withStyles(styles, { withTheme: true })(NewTrip);