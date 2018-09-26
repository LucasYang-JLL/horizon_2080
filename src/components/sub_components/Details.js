import React, { Component, Fragment } from "react";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import CommentsContainer from "../_containers/CommentsContainer";
import Tabs from "../_common/Tabs";

const styles = (theme) => ({
    content: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    root: {
        alignSelf: "flex-start",
        width: "67%",
        marginTop: theme.spacing.unit * 3,
        height: "70%",
        minHeight: "250px",
        marginRight: "auto"
    },
    // rootMd: {
    //     [theme.breakpoints.down("md")]: {
    //         width: "50%",
    //     }
    // },
    rootSm: {
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "250px",
            minHeight: "250px",
            position: "relative"
        }
    },
    table: {
        minWidth: 1020
    },
    tableCell: {
        width: "150px"
    },
    tableWrapper: {
        overflowX: "auto"
    },
    toolbar: theme.mixins.toolbar
});

class Details extends Component {
    state = {
        activeTab: 0
    };
    handleTabChange = (event, value) => {
        this.setState({ activeTab: value }, () => {
            console.log(this.state.activeTab);
        });
    };

    render() {
        const { classes, history } = this.props;
        const { slideState } = this.props.reduxState;
        const { path } = this.props.match;
        return (
            <Fragment>
                <Slide direction={slideState} in mountOnEnter unmountOnExit>
                    <Paper className={classNames(classes.root, classes.rootMd, classes.rootSm)}>
                        <Tabs activeTab={this.state.activeTab} handleTabChange={this.handleTabChange} msgID="tab.details.title" fullWidth={false} />
                        <div className={classes.content} />
                    </Paper>
                </Slide>
                <CommentsContainer location={this.props.location} docked={true} />
            </Fragment>
        );
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
