import React, { Component, Fragment } from "react";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navigation from "./_common/Navigation";
import EnhancedTable from "./_common/Table";
import { Route } from "react-router-dom";
import DetailsContainer from "./_containers/DetailsContainer";

const styles = (theme) => ({
    content: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexWrap: "wrap",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up("md")]: {
            paddingRight: 0,
            paddingBottom: 0,
        },
        minWidth: 0 // So the Typography noWrap works
    },
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
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

class Performance extends Component {
    state = {};

    render() {
        const { classes, history } = this.props;
        const { slideState } = this.props.reduxState;
        const { pathname } = this.props.location;
        let depth = pathname.split("/").filter((value) => value !== "").length;
        return (
            <Slide direction={slideState} in mountOnEnter unmountOnExit>
                <Fragment>
                    <div className={classes.toolbar} />
                    <div className={classes.content}>
                        <div className={classes.toolbar} />
                        <Navigation depth={depth} history={history} slideFunc={this.props.slideDirection} component="performance" />
                        {depth <= 1 ? <EnhancedTable {...this.props} /> : <Route path="/performance/:id" component={DetailsContainer} />}
                    </div>
                </Fragment>
            </Slide>
        );
    }
}

Performance.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Performance);
