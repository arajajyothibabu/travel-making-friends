import React, { Component, Fragment } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {IMAGES_FOLDER} from "../../../utils";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import {fade} from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.35),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        /*marginRight: theme.spacing.unit * 2,
        marginLeft: 0,*/
        top: 80,
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            //marginLeft: theme.spacing.unit * 3,
            width: '40%',
            top: 130
        },
        display: 'flex',
        color: '#FFFFFF'
    },
    searchIcon: {
        [theme.breakpoints.up('md')]: {
            width: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 1.5
        },
        width: theme.spacing.unit * 4,
        height: '100%',
        padding: theme.spacing.unit,
        //position: 'absolute',
        //pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#FFFFFF'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            //width: 200,
            fontSize: 24,
        },
        margin: 0,
        fontSize: 18,
    },
    paper: {
        width: '100%',
        minHeight: 160,
        height: '30%',
        background: `url(${IMAGES_FOLDER}beachview.jpg) no-repeat 100%`,
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
            //marginLeft: theme.spacing.unit * 3,
            minHeight: 320,
        },
    }
});

class Hero extends Component {

    state = {
        q: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        //TODO:
        console.log(this.state.q);
    };

    handleQuery = e => {
        this.setState({q: e.target.value});
    };

    render(){
        const { classes } = this.props;
        return(
            <Fragment>
                <Paper className={classes.paper}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={this.handleQuery}
                                value={this.state.q}
                            />
                            <IconButton type="submit" className={classes.searchIcon}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </form>
                </Paper>
            </Fragment>
        )
    }

}

export default withStyles(styles)(Hero);
