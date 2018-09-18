import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Router, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import HeaderContainer from "./components/_containers/HeaderContainer";
import Performance from "./components/Performance";
import Events from "./components/Events";
import Comments from "./components/Comments";
import Actions from "./components/Actions";
import Settings from "./components/Settings";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#212121"
        },
        secondary: {
            main: "#E30613"
        }
    }
});

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
});

const history = createBrowserHistory();

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Router history={history}>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <HeaderContainer history={history} />
                        <Route exact path="/" component={Performance} />
                        <Route path="/performance" component={Performance} />
                        <Route path="/events" component={Events} />
                        <Route path="/comments" component={Comments} />
                        <Route path="/actions" component={Actions} />
                        <Route path="/settings" component={Settings} />
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
