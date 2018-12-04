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

class Trip extends Component {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render(){
        const { classes,
            trip: { start, place, time, notes, max_size, gang = [] }
        } = this.props;
        return(
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<strong>{place.name}</strong>}
                    subheader={<span title={moment(time).fromNow()}>{moment(time).format("Do MMM YYYY")}</span>}
                />
                {/*<CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />*/}
                <CardContent>
                    <Grid container spacing={16}>
                        <Grid item xs={12} md={3}>
                            <Typography component="p" variant="body2">
                                {start.name}
                            </Typography>
                        </Grid>
                        <Grid item xs md>
                            <div className={classes.avatars}>
                                {gang.map(g => <Avatar title={g} className={classes.avatar} key={g}>{g.charAt(0)}</Avatar>)}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {notes}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

const styles = theme => ({
    card: {
        //maxWidth: 400,
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
        '&:hover': {
            boxShadow: '0 0 3px #515151'
        },
        boxSizing: 'border-box'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[600],
        marginLeft: theme.spacing.unit
    },
    avatars: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

class Trips extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const { trips } = this.props;
        return(
            <Grid container justify="center">
                <Grid item xs={12} sm={7} md={8} lg={7}>
                    {
                        mock.map(trip => <Trip key={trip._id} {...this.props} trip={trip}/>)
                    }
                </Grid>
                <Hidden smDown>
                    <Grid item sm={5} md={4} lg={3}>
                        {
                            mock.map(trip => <Trip key={trip._id} {...this.props} trip={trip}/>)
                        }
                    </Grid>
                </Hidden>
            </Grid>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Trips);