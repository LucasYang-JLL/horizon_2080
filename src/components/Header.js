import React, { Component, Fragment } from "react";
import { persistStore } from "redux-persist";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LanguageIcon from "@material-ui/icons/Language";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EventIcon from "@material-ui/icons/Event";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import SettingsIcon from "@material-ui/icons/Settings";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import LogoWhite from "../images/logo/JLL_Logo.png";

const drawerWidth = 240;

// write down all the styles into an object
const styles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    flex: {
        display: "flex"
    },
    drawerList: {
        "& div:last-child": {
            marginTop: "auto"
        }
    },
    drawerUl: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        whiteSpace: "nowrap",
        height: "100%"
    },
    drawerPaperMd: {
        [theme.breakpoints.down("sm")]: {
            overflowX: "hidden",
            width: theme.spacing.unit * 7,
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing.unit * 9
            },
            height: "100%"
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    appBarMenu: {
        display: "flex",
        justifyContent: "flex-end",
        flexGrow: 1,
        alignItems: "center",
        fontSize: "14px"
    },
    navIconHide: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 22
    }
});

let drawerConfig = [
    { link: "/performance", icon: <EqualizerIcon /> },
    { link: "/events", icon: <EventIcon /> },
    { link: "/comments", icon: <CommentIcon /> },
    { link: "/actions", icon: <SendIcon /> },
    { link: "/settings", icon: <SettingsIcon /> }
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            mobileOpen: false,
            open: false,
            activeDrawer: 0
        };
    }

    componentDidMount() {
        let drawerState = drawerConfig.findIndex(({ link }) => this.props.history.location.pathname.includes(link));
        this.setState({
            activeDrawer: drawerState === -1 ? 0 : drawerState // normalize unfound index to above 0
        });
    }

    componentWillReceiveProps(props) {
        const { location } = props.history;
        let drawerIndex = drawerConfig.findIndex(({ link }) => location.pathname.includes(link));
        if (drawerIndex !== this.state.activeDrawer) {
            this.setState({
                activeDrawer: drawerIndex
            });
        }
    }
    componentWillUnmount() {}

    handleDrawerToggle = () => {
        this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
    };

    handleDrawerClick = (e, name, value, index) => {
        this.setState(
            (prevState) => {
                let direction = prevState[name] > index ? "up" : "down";
                this.props.slideDirection(direction);
                return {
                    ...this.state,
                    [name]: index
                };
            },
            () => {
                this.props.history.push(drawerConfig[index].link);
            }
        );
    };

    handleLanguageSwitch = (event, value) => {
        this.props.selectLanguage(value);
        this.handleClose(event);
    };

    handleMenuOpen = () => {
        this.setState((state) => ({ open: !state.open }));
    };

    handleClose = (event) => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        // the side drawer of the app
        const drawer = (
            <Fragment>
                <div className={classes.toolbar} />
                <FormattedMessage id={`header.drawers`}>
                    {(msg) => (
                        <List className={classNames(classes.drawerUl, classes.drawerList)} onClick={this.handleDrawerToggle}>
                            {msg.split(",").map((value, index) => (
                                <ListItem selected={this.state.activeDrawer === index} onClick={(e) => this.handleDrawerClick(e, "activeDrawer", value, index)} key={value} button>
                                    <ListItemIcon>{drawerConfig[index].icon}</ListItemIcon>
                                    <ListItemText disableTypography primary={value} />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </FormattedMessage>
            </Fragment>
        );
        return (
            <div className={classes.flex}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Grid container direction="row" alignItems="center">
                            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Horizon
                            </Typography>
                            <Grid className={classes.appBarMenu}>
                                <IconButton
                                    color="inherit"
                                    onClick={this.handleMenuOpen}
                                    aria-owns={open ? "menu-list-grow" : null}
                                    aria-haspopup="true"
                                    buttonRef={(node) => {
                                        this.anchorEl = node;
                                    }}
                                >
                                    <LanguageIcon className={classes.icon} />
                                </IconButton>
                                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow {...TransitionProps} id="menu-list-grow" style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
                                            <Paper>
                                                <ClickAwayListener onClickAway={this.handleClose}>
                                                    <MenuList>
                                                        <MenuItem onClick={(e) => this.handleLanguageSwitch(e, "zh")}>中文</MenuItem>
                                                        <MenuItem onClick={(e) => this.handleLanguageSwitch(e, "en")}>English</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                                <img src={LogoWhite} style={{ width: "90px" }} />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Hidden smUp>
                    <Drawer
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        variant="temporary"
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden className={classes.flex} xsDown>
                    <Drawer
                        open
                        onClose={this.handleDrawerToggle}
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, classes.drawerPaperMd)
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

// use hoc to include styles into the component
export default withStyles(styles)(Header);
