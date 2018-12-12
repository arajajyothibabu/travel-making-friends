import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dialog from "../reusable/Dialog";
import AccountsUIWrapper from "../reusable/AccountsUIWrapper";
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        background: 'rgba(20, 20, 200, 0.1)',
        position: 'absolute'//'fixed'
    }
});

class Header extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        askAuth: false
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleAuthOpen = () => {
        this.setState({askAuth: true});
    };

    handleAuthClose = () => {
        this.setState({askAuth: false});
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl, askAuth } = this.state;
        const { classes, currentUser } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const isHome = window.location.pathname === "/";

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MessageIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="sticky" color="primary" className={classnames({[classes.appBar]: isHome})} elevation={1}>
                    <Toolbar variant="dense">
                        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>*/}
                        <Link to={`/`}>
                            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                Travel Making Friends
                            </Typography>
                        </Link>
                        <div className={classes.grow} />
                        { currentUser &&
                            <Fragment>
                                <div className={classes.sectionDesktop}>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <MessageIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={17} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Fragment>
                        }
                        {
                            !currentUser &&
                                <Fragment>
                                    <div>
                                        <IconButton
                                            color="inherit"
                                            onClick={this.handleAuthOpen}
                                        >
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </div>
                                </Fragment>
                        }
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={askAuth}
                    handleClose={this.handleAuthClose}
                    fullWidth
                    maxWidth="xs"
                    withActions
                    withCancel
                    handleCancel={this.handleAuthClose}
                >
                    <div style={{minHeight: 240, width: '100%'}}>
                        <AccountsUIWrapper/>
                    </div>
                </Dialog>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);