import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navigation from "./_common/Navigation";
import EnhancedTable from "./_common/Table";

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
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
    render() {
        const { classes, history } = this.props;
        const { slideDirection } = this.props.reduxState;
        const { pathname } = this.props.location;
        console.log(this.props);
        return (
            <Slide direction={slideDirection} in mountOnEnter unmountOnExit>
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    <Navigation pathname={pathname} history={history} />
                    <EnhancedTable />
                </div>
            </Slide>
        );
    }
}

Performance.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Performance);
