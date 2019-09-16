import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import moment from 'moment';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
        width: '100%',
        padding: theme.spacing.unit,
        //margin: theme.spacing.unit,
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

export default withStyles(styles, { withTheme: true })(Trip);