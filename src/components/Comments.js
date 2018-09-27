import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Navigation from "./_common/Navigation";
import classNames from "classnames";
import Tabs from "./_common/Tabs";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    dockedRoot: {
        // position: "absolute",
        // right: 0,
        width: "30%",
        whiteSpace: "nowrap",
        height: "100%",
        alignSelf: "flex-end",
        overflowX: "hidden",
        marginLeft: theme.spacing.unit * 3
    },
    dockedRootMd: {
        [theme.breakpoints.down("sm")]: {
            overflowX: "hidden",
            width: "100%",
            height: "200px",
            minHeight: "200px",
            position: "relative",
            margin: "20px auto"
        }
    },
    toolbar: theme.mixins.toolbar,
    toolbarMd: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
});

class Comments extends Component {
    state = {
        activeTab: 0
    };
    handleTabChange = (event, value) => {
        this.setState({ activeTab: value }, () => {
            console.log(this.state.activeTab);
        });
    };
    render() {
        const { classes, docked, history } = this.props;
        const { slideState } = this.props.reduxState;
        const { pathname } = this.props.location;
        let depth = pathname.split("/").filter((value) => value !== "").length;
        console.log(this.props);
        return docked ? (
            <Slide direction={"left"} in mountOnEnter unmountOnExit>
                <Paper className={classNames(classes.dockedRoot, classes.dockedRootMd)}>
                    <div className={classNames(classes.toolbar, classes.toolbarMd)} />
                    {/* <Navigation depth={depth} history={history} slideFunc={this.props.slideDirection} component="comments" /> */}
                    <Tabs activeTab={this.state.activeTab} handleTabChange={this.handleTabChange} msgID="tab.comments.title" />
                </Paper>
            </Slide>
        ) : (
            <Slide direction={slideState} in mountOnEnter unmountOnExit>
                <div className={classes.root}>
                    <div className={classes.toolbar} />
                    <Navigation depth={depth} history={history} slideFunc={this.props.slideDirection} component="comments" />
                    Comments
                </div>
            </Slide>
        );
    }
}

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
    docked: PropTypes.bool.isRequired
};
Comments.defaultProps = {
    docked: false,
    classes: {}
};

export default withStyles(styles)(Comments);
