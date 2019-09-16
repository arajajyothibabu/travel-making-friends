import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import moment from 'moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withTracker } from 'meteor/react-meteor-data';
import Trip from "./TripShort";

import { Trips as TripsCollection } from '../../api/trips';

const mock = [
    {
        place: {name: "Shilparamam", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 3
    },
    {
        place: {name: "Charminar", pos: {lat: 0, long: 0}},
        start: {name: "Gachibowli", pos: {lat: 0, long: 0}},
        gang: ["Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 7
    },
    {
        place: {name: "Sangi Temple", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-07T04:41:57.228Z",
        max_size: 8
    },
    {
        place: {name: "Wonder La", pos: {lat: 0, long: 0}},
        start: {name: "Kothaguda", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-07T04:41:57.228Z",
        max_size: 10
    },
    {
        place: {name: "Golconda", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-07T04:41:57.228Z",
        max_size: 5
    },
    {
        place: {name: "Birla Mandir", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-08T04:41:57.228Z",
        max_size: 3
    },
    {
        place: {name: "Zoo Park", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao", "Ella Rao", "Anna Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-08T04:41:57.228Z",
        max_size: 5
    }
].map(o => ({...o, _id: '' + Math.random()}));

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative'
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        background: 'rgba(138,191,237,0.35)'
    }
});

const toDatedTrips = (trips = []) => {
    return trips.reduce((agg, trip) => {
        const key = moment(trip.time).startOf('day');
        if(agg.hasOwnProperty(key)){
            agg[key].push(trip);
        }else{
            agg[key] = [trip];
        }
        return agg;
    }, {});
};

class Trips extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const { trips, classes } = this.props;
        const datedTrips = toDatedTrips(trips);
        return(
            <div>
                <List className={classes.root} subheader={<li />}>
                    {Object.keys(datedTrips).map(date => (
                        <li key={`section-${date}`} className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>
                                    <Paper className={classes.paper}>
                                        <Typography variant="subheading">{moment(date).format("Do MMM YYYY")} ({datedTrips[date].length})</Typography>
                                    </Paper>
                                </ListSubheader>
                                {datedTrips[date].map(trip => (
                                    <ListItem key={`item-${date}-${trip._id}`}>
                                        <Trip key={trip._id} trip={trip}/>
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    ))}
                </List>
            </div>
        )
    }

}

const withMeteorTracker = withTracker((props) => {
    const trips = TripsCollection.find({}).fetch();
    return {
        trips: TripsCollection.find({}).fetch(),
    };
});

export default withMeteorTracker(withStyles(styles, { withTheme: true })(Trips));