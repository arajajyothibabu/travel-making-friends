import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Location from "../reusable/maps/Location";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import DateTimePicker from "../reusable/DateTimePicker";
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import GroupIcon from '@material-ui/icons/Group';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Hidden from '@material-ui/core/Hidden';

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
        time: "2018-12-06T04:41:57.228Z",
        max_size: 8
    },
    {
        place: {name: "Wonder La", pos: {lat: 0, long: 0}},
        start: {name: "Kothaguda", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 10
    },
    {
        place: {name: "Golconda", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 5
    },
    {
        place: {name: "Birla Mandir", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 3
    },
    {
        place: {name: "Zoo Park", pos: {lat: 0, long: 0}},
        start: {name: "Kondapur", pos: {lat: 0, long: 0}},
        gang: ["Appa Rao", "Pulla Rao", "Ella Rao", "Anna Rao"],
        notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2018-12-06T04:41:57.228Z",
        max_size: 5
    }
].map(o => ({...o, _id: '' + Math.random()}));

import { withTracker } from 'meteor/react-meteor-data';

import { Trips } from '../../api/trips';
import Hero from "../layout/Hero";
import FlatDatePicker from "../reusable/FlatDatePicker";
import NewTripForm from "../reusable/NewTripForm";
import Header from "../layout/Header";

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
                <Header />
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