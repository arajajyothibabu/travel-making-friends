import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Location from "./reusable/maps/Location";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import DateTimePicker from "./reusable/DateTimePicker";
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import GroupIcon from '@material-ui/icons/Group';

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
            time: moment(),
            max_size: 2
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
                    <Grid item xs={12} md={6}>
                        <Location label="Trip to" handleChange={this.handlePlace}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Location label="Starting from" handleChange={this.handleStart}/>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <DateTimePicker dateTime={time} handleChange={this.handleTime}/>
                    </Grid>
                    <Grid xs={12} md={6} item>
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
                    <Grid item xs={12} md={6}>
                        <Slider
                            min={0}
                            max={15}
                            step={1}
                            value={max_size}
                            aria-labelledby="Max People"
                            onChange={this.handleSize}
                            thumb={<GroupIcon />}
                        />
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default withStyles(styles, { withTheme: true })(NewTrip);